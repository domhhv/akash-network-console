"use client";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Alert, Form, FormField, FormInput, Popup } from "@akashnetwork/ui/components";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { useBackgroundTask } from "@src/context/BackgroundTaskProvider";
import type { ProviderInfo } from "@src/hooks/useProviderWebsocket";
import { analyticsService } from "@src/services/analytics/analytics.service";
import type { LeaseDto } from "@src/types/deployment";

type Props = {
  selectedLease: LeaseDto;
  onCloseClick: () => void;
  selectedService: string;
  providerInfo: ProviderInfo;
};

const formSchema = z.object({
  filePath: z
    .string()
    .min(1, {
      message: "File path is required."
    })
    .regex(/^(?!https?:).*/i, {
      message: "Should be a valid path on the server, not a URL."
    })
});

type FormData = z.infer<typeof formSchema>;

export const ShellDownloadModal = ({ selectedLease, onCloseClick, selectedService, providerInfo }: Props) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const { downloadFileFromShell } = useBackgroundTask();
  const form = useForm<FormData>({
    defaultValues: {
      filePath: ""
    },
    resolver: zodResolver(formSchema)
  });
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = form;

  const onSubmit = async ({ filePath }: FormData) => {
    downloadFileFromShell(providerInfo, selectedLease.dseq, selectedLease.gseq, selectedLease.oseq, selectedService, filePath);

    analyticsService.track("downloaded_shell_file", {
      category: "deployments",
      label: "Download file from shell"
    });

    onCloseClick();
  };

  const onDownloadClick = (event: React.MouseEvent) => {
    event.preventDefault();
    formRef.current?.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
  };

  return (
    <Popup
      fullWidth
      open
      variant="custom"
      title="Download file"
      actions={[
        {
          label: "Cancel",
          color: "primary",
          variant: "text",
          side: "left",
          onClick: onCloseClick
        },
        {
          label: "Download",
          color: "secondary",
          variant: "default",
          side: "right",
          disabled: !!errors.filePath,
          onClick: onDownloadClick
        }
      ]}
      onClose={onCloseClick}
      maxWidth="xs"
    >
      <p className="text-xs text-muted-foreground">Enter the path of a file on the server to be downloaded to your computer. Example: /app/logs.txt</p>
      <Alert variant="warning" className="my-2 py-2">
        <p className="text-xs">This is an experimental feature and may not work reliably.</p>
      </Alert>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} ref={formRef}>
          <FormField
            control={control}
            name="filePath"
            render={({ field }) => {
              return <FormInput {...field} type="text" label="File path" autoFocus placeholder="Example: /app/logs.txt" />;
            }}
          />
        </form>
      </Form>
    </Popup>
  );
};
