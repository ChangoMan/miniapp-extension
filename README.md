# Farcaster Miniapp Extension for Scaffold-ETH 2

This extension transforms your Scaffold-ETH 2 project into a [Farcaster Miniapp](https://miniapps.farcaster.xyz/), enabling users to interact with your dApp directly within Farcaster and The Base App.

## Features

- 🎯 **Farcaster SDK Integration** - Adds `@farcaster/miniapp-sdk` for miniapp lifecycle management
- 🔌 **Wallet Connector** - Integrates `@farcaster/miniapp-wagmi-connector` for seamless Web3 authentication
- 🎨 **Custom Metadata** - Configures feed previews, splash screens, and launch buttons for Farcaster

## Installation

```bash
npx create-eth@latest -e ChangoMan/miniapp-extension
```

## What's Included

### Components

- **`MiniappProvider`** - Client-side provider that initializes Farcaster SDK and signals app readiness

### Configuration Files (`.args.mjs`)

- **`ScaffoldEthAppWithProviders.tsx.args.mjs`** - Wraps app with MiniappProvider
- **`wagmiConfig.tsx.args.mjs`** - Adds Farcaster wallet connector to Wagmi configuration
- **`getMetadata.ts.args.mjs`** - Customizes metadata for Farcaster feed sharing with launch buttons

### Static Assets

- App icon, splash screen, feed preview, and OpenGraph images
- `.well-known/farcaster.json` - Miniapp manifest with metadata

## Configuration

Update `/packages/nextjs/public/.well-known/farcaster.json` with your miniapp details:

```json
{
  "name": "Your App Name",
  "homeUrl": "https://your-app.com",
  "description": "Your app description",
  "splashImageUrl": "https://your-app.com/splash.png",
  "iconUrl": "https://your-app.com/icon.png"
}
```

## Usage

Once installed, your Scaffold-ETH 2 app will:

1. Be discoverable as a Farcaster miniapp
2. Display custom feed previews when shared in Farcaster
3. Support Farcaster wallet authentication
4. Handle miniapp lifecycle events automatically

## Resources

- [Farcaster Miniapp Documentation](https://miniapps.farcaster.xyz/)
- [Scaffold-ETH 2 Documentation](https://docs.scaffoldeth.io)
- [Third-Party Extension Guide](https://github.com/scaffold-eth/create-eth/blob/main/contributors/THIRD-PARTY-EXTENSION.md)
