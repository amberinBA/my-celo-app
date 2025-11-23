"use client";

import type { ReactNode } from "react";

export default function Providers({ children }: { children: ReactNode }) {
  // For now, no extra providers – just return children directly.
  // Later we can wrap wagmi, XMTP, etc. here if needed.
  return <>{children}</>;
}
