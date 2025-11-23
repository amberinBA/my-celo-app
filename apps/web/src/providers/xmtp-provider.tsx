"use client";

import { ReactNode } from "react";

export function XMTPProvider({ children }: { children: ReactNode }) {
  // XMTP disabled for now – just render children
  return <>{children}</>;
}
