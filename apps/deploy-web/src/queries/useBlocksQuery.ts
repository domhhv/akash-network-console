import type { QueryKey, UseQueryOptions } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { useSettings } from "@src/context/SettingsProvider";
import type { Block } from "@src/types";
import { ApiUrlService } from "@src/utils/apiUtils";
import { QueryKeys } from "./queryKeys";

// Block
async function getBlock(apiEndpoint: string, id: string) {
  const response = await axios.get(ApiUrlService.block(apiEndpoint, id));

  return response.data;
}

export function useBlock(id: string, options = {}) {
  const { settings } = useSettings();
  return useQuery({
    queryKey: QueryKeys.getBlockKey(id),
    queryFn: () => getBlock(settings.apiEndpoint, id),
    refetchInterval: false,
    refetchIntervalInBackground: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    ...options
  });
}

async function getBlocks(limit: number): Promise<Block[]> {
  const response = await axios.get(ApiUrlService.blocks(limit));
  return response.data;
}

export function useBlocks(limit: number, options?: Omit<UseQueryOptions<Block[], Error, any, QueryKey>, "queryKey" | "queryFn">) {
  return useQuery<Block[], Error>({
    queryKey: QueryKeys.getBlocksKey(limit),
    queryFn: () => getBlocks(limit),
    ...options
  });
}
