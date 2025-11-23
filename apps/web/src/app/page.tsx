"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";
import XMTPGroupChat from "@/components/XMTPGroupChat";

export default function Page() {
  useEffect(() => {
    // Tell Farcaster the miniapp is ready
    sdk.actions.ready();
  }, []);

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <XMTPGroupChat />
    </div>
  );
}
