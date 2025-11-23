"use client";

import { useConnect } from "wagmi";
import { Button } from "@/components/ui/button";

export default function ConnectWalletButton() {
  const { connect, connectors, isPending } = useConnect();

  return (
    <Button
      disabled={isPending}
      onClick={() => connect({ connector: connectors[0] })}  // 👈 first connector = farcasterMiniApp()
    >
      {isPending ? "Connecting..." : "Connect Wallet"}
    </Button>
  );
}
