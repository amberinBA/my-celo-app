import { http, createConfig } from "wagmi";
import { celo } from "viem/chains";
import { injected } from "@wagmi/connectors";

export const config = createConfig({
  chains: [celo],
  transports: {
    [celo.id]: http(),
  },
  connectors: [injected()],
});
