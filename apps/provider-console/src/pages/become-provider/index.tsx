"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";

import { PortsAndDNS } from "@src/components/become-provider/PortsAndDNS";
import { ProviderAttributes } from "@src/components/become-provider/ProviderAttributes";
import { ProviderConfig } from "@src/components/become-provider/ProviderConfig";
import { ProviderPricing } from "@src/components/become-provider/ProviderPricing";
import { ServerAccess } from "@src/components/become-provider/ServerAccess";
import { CustomizedSteppers } from "@src/components/become-provider/Stepper";
import { WalletImport } from "@src/components/become-provider/WalletImport";
import { Layout } from "@src/components/layout/Layout";
import { withAuth } from "@src/components/shared/withAuth";
import providerProcessStore from "@src/store/providerProcessStore";

const BecomeProvider: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [providerProcess, setProviderProcess] = useAtom(providerProcessStore.providerProcessAtom);

  const providerSteps = useMemo(
    () => [
      { key: "serverAccess", component: ServerAccess, label: "Server Access", visualStep: 0 },
      { key: "providerConfig", component: ProviderConfig, label: "Provider Configuration", visualStep: 1 },
      { key: "providerAttribute", component: ProviderAttributes, label: "Provider Attributes", visualStep: 2 },
      { key: "providerPricing", component: ProviderPricing, label: "Pricing", visualStep: 3 },
      { key: "portsAndDNS", component: PortsAndDNS, label: "Ports & DNS", visualStep: 3 },
      { key: "walletImport", component: WalletImport, label: "Wallet Import", visualStep: 4 }
    ],
    []
  );

  useEffect(() => {
    const currentStepIndex = providerSteps.findIndex(step => !providerProcess.process[step.key]);
    setActiveStep(currentStepIndex === -1 ? providerSteps.length : currentStepIndex);
  }, [providerProcess.process, providerSteps]);

  const handleStepComplete = useCallback(() => {
    // Skip processing for wallet import step
    if (providerSteps[activeStep].key === "walletImport") {
      return;
    }

    setProviderProcess(prev => ({
      ...prev,
      process: {
        ...prev.process,
        [providerSteps[activeStep].key]: true
      }
    }));
  }, [activeStep, providerSteps, setProviderProcess]);

  const CurrentStepComponent = useMemo(() => {
    return providerSteps[activeStep].component;
  }, [activeStep, providerSteps]);

  return (
    <Layout>
      <CustomizedSteppers activeStep={activeStep} />
      <CurrentStepComponent onComplete={handleStepComplete} />
    </Layout>
  );
};

export default withAuth({ WrappedComponent: BecomeProvider, authLevel: "wallet" });
