"use client";

import type { ReactNode } from "react";
import {
  WagmiProvider as WagmiConfigProvider,
  createConfig,
  http,
} from "wagmi";
import { celo } from "wagmi/chains"; // ⬅ if this crashes, see note below
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// ✅ THIS is the correct Farcaster export
import { farcasterMiniApp } from "@farcaster/miniapp-wagmi-connector";

// ---- wagmi config ----
const config = createConfig({
  chains: [celo],
  transports: {
    [celo.id]: http(),
  },
  connectors: [
    // ✅ Farcaster MiniApp wallet connector
    farcasterMiniApp(),
  ],
});

// one QueryClient for the whole app
const queryClient = new QueryClient();

export default function WagmiProviderFC({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WagmiConfigProvider config={config}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiConfigProvider>
  );
}
