"use client";
import React, { useMemo } from "react";
import { Separator, Spinner } from "@akashnetwork/ui/components";
import { WarningTriangle } from "iconoir-react";
import Link from "next/link";

import { DashboardCardSkeleton } from "@src/components/dashboard/DashboardCardSkeleton";
import { FinanceCard } from "@src/components/dashboard/FinanceCard";
import { ProviderHealthCheck } from "@src/components/dashboard/ProviderHealthCheck";
import { ResourceCards } from "@src/components/dashboard/ResourcesCard";
import { Layout } from "@src/components/layout/Layout";
import { ActivityLogList } from "@src/components/shared/ActivityLogList";
import { Title } from "@src/components/shared/Title";
import { withAuth } from "@src/components/shared/withAuth";
import { useControlMachine } from "@src/context/ControlMachineProvider";
import { useProvider } from "@src/context/ProviderContext";
import { useProviderActions } from "@src/queries/useProviderQuery";
import { formatUUsd } from "@src/utils/formatUsd";

const OfflineWarningBanner: React.FC = () => {
  const { isLoadingOnlineStatus } = useProvider();

  if (isLoadingOnlineStatus) {
    return (
      <div className="mb-4 rounded-md bg-yellow-100 p-4 text-gray-700">
        <div className="flex h-6 items-center">
          <Spinner className="mr-2 h-5 w-5" size="small" />
          <p>Checking provider status...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-4 rounded-md bg-yellow-100 p-4 text-yellow-700">
      <div className="flex">
        <WarningTriangle className="mr-2 h-5 w-5" />
        <p>
          Warning: Your provider is currently offline.{" "}
          <Link href="/remedies" className="font-medium underline">
            Click here for remedies
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

const AuditGuidanceBanner: React.FC = () => (
  <div className="border-border bg-card text-card-foreground mb-4 rounded-md border-2 p-4">
    <div className="flex flex-col gap-2">
      <div className="flex items-start">
        <WarningTriangle className="text-warning mr-2 h-5 w-5" />
        <div>
          <p className="font-semibold">Your provider is not audited yet!</p>
          <p className="mt-1">Audited providers receive significantly more workloads. Follow these steps to get audited:</p>
          <ol className="ml-6 list-decimal">
            <li>Create a separate Keplr wallet for testing (don&apos;t use your provider wallet)</li>
            <li>
              Test deploy:
              <ul className="ml-4 mt-1 list-disc">
                <li>
                  For CPU-only providers: Deploy{" "}
                  <Link
                    href="https://console.akash.network/templates/akash-network-awesome-akash-tetris"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tetris
                  </Link>{" "}
                  (remove the &quot;signedBy&quot; field from template)
                </li>
                <li>
                  For GPU providers: Deploy both{" "}
                  <Link
                    href="https://console.akash.network/templates/akash-network-awesome-akash-tetris"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    Tetris
                  </Link>{" "}
                  and{" "}
                  <Link
                    href="https://console.akash.network/templates/akash-network-awesome-akash-comfyui"
                    className="text-primary hover:underline"
                    target="_blank"
                  >
                    ComfyUI
                  </Link>{" "}
                  (remove the &quot;signedBy&quot; field from template)
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="https://github.com/akash-network/community/issues/new?template=-provider-audit--template.md"
                className="text-primary hover:underline"
                target="_blank"
              >
                Apply for provider audit
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);

const Dashboard: React.FC = () => {
  const { isOnline, isLoadingOnlineStatus } = useProvider();
  const { activeControlMachine } = useControlMachine();

  const { providerDetails, providerDashboard, isLoadingProviderDetails, isLoadingProviderDashboard } = useProvider();
  const { data: providerActions, isLoading: isLoadingProviderActions } = useProviderActions();

  // Get the control machine IP from activeControlMachine
  const controlMachineIp = activeControlMachine?.access?.hostname || "";

  // Get domain from provider details
  const domain = (() => {
    if (!providerDetails?.hostUri) return "";
    const hostMatch = providerDetails.hostUri.match(/provider\.([^:/]+)/);
    return hostMatch?.[1] || "";
  })();

  const summaryCards = useMemo(
    () => (
      <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <FinanceCard
          title={formatUUsd(providerDashboard?.current.dailyUUsdEarned)}
          subtitle="Earned (last 24H)"
          currentPrice={providerDashboard?.current.dailyUUsdEarned ?? null}
          previousPrice={providerDashboard?.previous.dailyUUsdEarned ?? null}
          message="Change in earned paid compared to 24 hours ago"
        />
        <FinanceCard
          title={formatUUsd(providerDashboard?.current.totalUUsdEarned)}
          subtitle="Earned (Total)"
          currentPrice={providerDashboard?.current.totalUUsdEarned ?? null}
          previousPrice={providerDashboard?.previous.totalUUsdEarned ?? null}
          message="Change in total earned compared to 24 hours ago"
        />
        <FinanceCard
          title={providerDashboard?.current.activeLeaseCount ? `${providerDashboard?.current.activeLeaseCount}` : "0"}
          subtitle="Active Leases"
          currentPrice={providerDashboard?.current.activeLeaseCount ?? null}
          previousPrice={providerDashboard?.previous.activeLeaseCount ?? null}
          message="Change in active leases compared to 24 hours ago"
        />
        <FinanceCard
          title={providerDashboard?.current.totalLeaseCount ? `${providerDashboard?.current.totalLeaseCount}` : "0"}
          subtitle="Total Leases"
          currentPrice={providerDashboard?.current.totalLeaseCount ?? null}
          previousPrice={providerDashboard?.previous.totalLeaseCount ?? null}
          message="Change in total leases compared to 24 hours ago"
        />
      </div>
    ),
    [providerDashboard]
  );

  return (
    <Layout isLoading={isLoadingOnlineStatus}>
      {providerDetails && !isOnline && <OfflineWarningBanner />}
      {/* Add health check warnings for ports and DNS */}
      {/* Port checks only need provider details, DNS checks need both provider details and control machine */}
      {(providerDetails || controlMachineIp) && <ProviderHealthCheck providerIp={controlMachineIp} domain={domain} />}
      {providerDetails && !providerDetails.isAudited && <AuditGuidanceBanner />}
      <div className="flex items-center">
        <div className="w-10 flex-1">
          <Title>Dashboard</Title>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-lg font-semibold">
          <div className="inline-flex items-center space-x-2">
            Earnings and Leases
            {isLoadingProviderDashboard && <Spinner className="mb-2 ml-2 h-5 w-5" />}
          </div>
        </div>
        <div className="mt-2">
          {isLoadingProviderDashboard ? (
            <div className="grid grid-cols-3 gap-4">
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
            </div>
          ) : (
            summaryCards
          )}
        </div>
      </div>
      <div className="mt-8">
        <div className="text-lg font-semibold">Resources</div>
        <div className="mt-2">
          {isLoadingProviderDetails ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
              <DashboardCardSkeleton />
            </div>
          ) : (
            <ResourceCards providerDetails={providerDetails} />
          )}
        </div>
      </div>

      <Separator className="mt-10" />
      <div className="mt-8">
        <div className="mt-2">
          <div className="text-lg font-semibold">Activity Logs</div>
          {isLoadingProviderActions ? <Spinner className="mt-4" /> : <ActivityLogList actions={providerActions?.slice(0, 5) || []} />}
        </div>
      </div>
    </Layout>
  );
};

export default withAuth({ WrappedComponent: Dashboard, authLevel: "provider" });
