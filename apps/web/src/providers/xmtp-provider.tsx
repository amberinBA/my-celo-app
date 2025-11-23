"use client";

import { XMTPProvider as SDKProvider } from "@xmtp/react-sdk";
import { useAccount } from "wagmi";

export default function XMTPProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { address, isConnected } = useAccount(); // wallet status

  return (
    <SDKProvider
      wallet={isConnected ? { address } : null} // connect only if wallet ready
      persistConversation={true}
      autoConnect={true}
      appVersion="sweatbet-miniapp"
    >
      {children}
    </SDKProvider>
  );
}
