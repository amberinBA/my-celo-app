// apps/web/src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/navbar";
import Providers from "@/contexts/providers";
import WagmiProviderFC from "@/providers/wagmi-provider";

const inter = Inter({ subsets: ["latin"] });
const appUrl = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

export const metadata: Metadata = {
  title: "my-celo-app",
  description: "A new Celo blockchain project",
  openGraph: {
    title: "my-celo-app",
    description: "A new Celo blockchain project",
    images: [`${appUrl}/opengraph-image.png`],
  },
  other: {
    "fc:frame": JSON.stringify({
      version: "1",
      imageUrl: `${appUrl}/opengraph-image.png`,
      button: {
        title: "Launch my-celo-app",
        action: {
          type: "launch_frame",
          name: "my-celo-app",
          url: appUrl,
        },
      },
    }),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WagmiProviderFC>
          <Providers>
            <Navbar />
            <main>{children}</main>
          </Providers>
        </WagmiProviderFC>
      </body>
    </html>
  );
}
