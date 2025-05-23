import type { AxiosRequestConfig } from "axios";
import { isFuture } from "date-fns";

import { HttpService } from "../http/http.service";
import type { Denom } from "../types/denom.type";
import { isHttpError } from "../utils/isHttpError";

export interface SpendLimit {
  denom: Denom;
  amount: string;
}

export interface FeeAllowance {
  granter: string;
  grantee: string;
  allowance: {
    "@type": "/cosmos.feegrant.v1beta1.BasicAllowance";
    spend_limit: SpendLimit[];
    expiration: string;
  };
}

export interface ExactDepositDeploymentGrant {
  authorization: {
    "@type": "/akash.deployment.v1beta3.DepositDeploymentAuthorization";
    spend_limit: SpendLimit;
  };
  expiration: string;
}

export interface DepositDeploymentGrant extends ExactDepositDeploymentGrant {
  granter: string;
  grantee: string;
}

interface FeeAllowanceListResponse {
  allowances: FeeAllowance[];
  pagination?: {
    next_key: string | null;
    total: string;
  };
}

interface FeeAllowanceResponse {
  allowance: FeeAllowance;
}

interface DepositDeploymentGrantResponse<T extends ExactDepositDeploymentGrant = DepositDeploymentGrant> {
  grants: T[];
  pagination?: {
    next_key: string | null;
    total: string;
  };
}

export class AuthzHttpService extends HttpService {
  private readonly DEPOSIT_DEPLOYMENT_GRANT_TYPE: ExactDepositDeploymentGrant["authorization"]["@type"] =
    "/akash.deployment.v1beta3.DepositDeploymentAuthorization";

  private readonly FEE_ALLOWANCE_TYPE: FeeAllowance["allowance"]["@type"] = "/cosmos.feegrant.v1beta1.BasicAllowance";

  constructor(config?: Pick<AxiosRequestConfig, "baseURL">) {
    super(config);
  }

  async getFeeAllowancesForGrantee(address: string) {
    const allowances = this.extractData(await this.get<FeeAllowanceListResponse>(`cosmos/feegrant/v1beta1/allowances/${address}`));
    return allowances.allowances;
  }

  async getValidFeeAllowancesForGrantee(address: string) {
    const allowances = await this.getFeeAllowancesForGrantee(address);
    return allowances.filter(allowance => this.isValidFeeAllowance(allowance));
  }

  async getPaginatedFeeAllowancesForGranter(address: string, limit: number, offset: number) {
    const allowances = this.extractData(
      await this.get<FeeAllowanceListResponse>(`cosmos/feegrant/v1beta1/issued/${address}`, {
        params: {
          "pagination.limit": limit,
          "pagination.offset": offset,
          "pagination.count_total": true
        }
      })
    );

    return {
      ...allowances,
      pagination: {
        next_key: allowances.pagination?.next_key ?? null,
        total: parseInt(allowances.pagination?.total || "0")
      }
    };
  }

  async getFeeAllowanceForGranterAndGrantee(granter: string, grantee: string): Promise<FeeAllowance | undefined> {
    try {
      const response = this.extractData(await this.get<FeeAllowanceResponse>(`cosmos/feegrant/v1beta1/allowance/${granter}/${grantee}`));
      return this.isValidFeeAllowance(response.allowance) ? response.allowance : undefined;
    } catch (error) {
      if (isHttpError(error) && error.response?.data.message?.includes("fee-grant not found")) {
        return undefined;
      }

      throw error;
    }
  }

  async getDepositDeploymentGrantsForGranterAndGrantee(granter: string, grantee: string): Promise<ExactDepositDeploymentGrant | undefined> {
    const response = this.extractData(
      await this.get<DepositDeploymentGrantResponse<ExactDepositDeploymentGrant>>("cosmos/authz/v1beta1/grants", {
        params: {
          grantee: grantee,
          granter: granter
        }
      })
    );
    return response.grants.find(grant => this.isDepositDeploymentGrant(grant));
  }

  async getValidDepositDeploymentGrantsForGranterAndGrantee(granter: string, grantee: string): Promise<ExactDepositDeploymentGrant | undefined> {
    const response = this.extractData(
      await this.get<DepositDeploymentGrantResponse<ExactDepositDeploymentGrant>>("cosmos/authz/v1beta1/grants", {
        params: {
          grantee: grantee,
          granter: granter
        }
      })
    );
    return response.grants.find(grant => this.isValidDepositDeploymentGrant(grant));
  }

  async hasFeeAllowance(granter: string, grantee: string) {
    const feeAllowances = await this.getFeeAllowancesForGrantee(grantee);
    return feeAllowances.some(allowance => allowance.granter === granter);
  }

  async hasValidFeeAllowance(granter: string, grantee: string) {
    const feeAllowances = await this.getValidFeeAllowancesForGrantee(grantee);
    return feeAllowances.some(allowance => allowance.granter === granter);
  }

  async hasDepositDeploymentGrant(granter: string, grantee: string) {
    return !!(await this.getDepositDeploymentGrantsForGranterAndGrantee(granter, grantee));
  }

  async hasValidDepositDeploymentGrant(granter: string, grantee: string) {
    return !!(await this.getValidDepositDeploymentGrantsForGranterAndGrantee(granter, grantee));
  }

  async paginateDepositDeploymentGrants(
    options: ({ granter: string } | { grantee: string }) & { limit: number },
    cb: (page: DepositDeploymentGrantResponse["grants"]) => Promise<void>
  ): Promise<void> {
    let nextPageKey: unknown;
    const side = "granter" in options ? "granter" : "grantee";
    const address = "granter" in options ? options.granter : options.grantee;

    do {
      const response = this.extractData(
        await this.get<DepositDeploymentGrantResponse>(`cosmos/authz/v1beta1/grants/${side}/${address}`, {
          params: { "pagination.key": nextPageKey, "pagination.limit": options.limit }
        })
      );
      nextPageKey = response.pagination?.next_key;

      await cb(response.grants.filter(grant => this.isValidDepositDeploymentGrant(grant)));
    } while (nextPageKey);
  }

  async getAllDepositDeploymentGrants(options: ({ granter: string } | { grantee: string }) & { limit: number }): Promise<DepositDeploymentGrant[]> {
    const result: DepositDeploymentGrant[] = [];

    await this.paginateDepositDeploymentGrants(options, async page => {
      result.push(...page);
    });

    return result;
  }

  async getPaginatedDepositDeploymentGrants(options: ({ granter: string } | { grantee: string }) & { limit: number; offset: number }) {
    const side = "granter" in options ? "granter" : "grantee";
    const address = "granter" in options ? options.granter : options.grantee;
    const limit = options.limit;
    const offset = options.offset;

    const grants = this.extractData(
      await this.get<DepositDeploymentGrantResponse>(`cosmos/authz/v1beta1/grants/${side}/${address}`, {
        params: {
          "pagination.limit": limit,
          "pagination.offset": offset,
          "pagination.count_total": true
        }
      })
    );

    return {
      ...grants,
      pagination: {
        next_key: grants.pagination?.next_key ?? null,
        total: parseInt(grants.pagination?.total || "0")
      }
    };
  }

  private isValidFeeAllowance(allowance: FeeAllowance) {
    return !allowance.allowance.expiration || isFuture(new Date(allowance.allowance.expiration));
  }

  private isValidDepositDeploymentGrant(grant: ExactDepositDeploymentGrant) {
    return this.isDepositDeploymentGrant(grant) && (!grant.expiration || isFuture(new Date(grant.expiration)));
  }

  private isDepositDeploymentGrant({ authorization }: ExactDepositDeploymentGrant) {
    return authorization["@type"] === this.DEPOSIT_DEPLOYMENT_GRANT_TYPE;
  }
}
