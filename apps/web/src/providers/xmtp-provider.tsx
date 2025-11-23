"use client";

import { ReactNode } from "react";
import { SDKProvider } from "@xmtp/react-sdk";

export function XMTPProvider({ children }: { children: ReactNode }) {
  // We pass only client=null for now to disable XMTP until needed
  return <SDKProvider client={null}>{children}</SDKProvider>;
}
