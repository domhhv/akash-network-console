"use client";
import type { ReactNode } from "react";
import { CustomTooltip } from "@akashnetwork/ui/components";
import { cn } from "@akashnetwork/ui/utils";
import { InfoCircle } from "iconoir-react";

import { protectedEnvironmentVariables } from "@src/config/remote-deploy.config";
import { useSdlBuilder } from "@src/context/SdlBuilderProvider/SdlBuilderProvider";
import type { ServiceType } from "@src/types";
import { FormPaper } from "./FormPaper";

type Props = {
  currentService: ServiceType;
  serviceIndex?: number;
  children?: ReactNode;
  setIsEditingEnv: (value: boolean | number) => void;
  isRemoteDeployEnvHidden?: boolean;
};

export const EnvVarList: React.FunctionComponent<Props> = ({ currentService, setIsEditingEnv, serviceIndex, isRemoteDeployEnvHidden }) => {
  const { hasComponent } = useSdlBuilder();
  const currentEnvs = currentService.env?.filter(e => !isRemoteDeployEnvHidden || !(e?.key in protectedEnvironmentVariables));
  return (
    <FormPaper className={cn("whitespace-break-spaces break-all", isRemoteDeployEnvHidden && "!bg-card")}>
      <div className="mb-2 flex items-center">
        <strong className="text-sm">Environment Variables</strong>

        <CustomTooltip
          title={
            <>
              A list of environment variables to expose to the running container.
              {hasComponent("ssh") && (
                <>
                  <br />
                  <br />
                  Note: The SSH_PUBKEY environment variable is reserved and is going to be overridden by the value provided to the relevant field.
                </>
              )}
              <br />
              <br />
              <a href="https://akash.network/docs/getting-started/stack-definition-language/#services" target="_blank" rel="noopener">
                View official documentation.
              </a>
            </>
          }
        >
          <InfoCircle className="ml-2 text-xs text-muted-foreground" />
        </CustomTooltip>

        <span
          className="ml-4 cursor-pointer text-sm font-normal text-primary underline"
          onClick={() => setIsEditingEnv(serviceIndex !== undefined ? serviceIndex : true)}
        >
          Edit
        </span>
      </div>

      {currentEnvs?.length ? (
        currentEnvs.map((e, i) => (
          <div key={i} className="text-xs">
            {e.key}=<span className="text-muted-foreground">{e.value}</span>
          </div>
        ))
      ) : (
        <p className="text-xs text-muted-foreground">None</p>
      )}
    </FormPaper>
  );
};
