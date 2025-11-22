export const preContent = `
import { farcasterMiniApp as miniAppConnector } from "@farcaster/miniapp-wagmi-connector";
`

export const configOverrides = {
  connectors: `$$[miniAppConnector(), ...wagmiConnectors()]$$`,
}
