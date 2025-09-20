# Relay: Transactions Without Gas Fees

vLeap Relay enables blockchain transactions even when user wallets have zero native token balance. By adding a single line of code, you can dramatically improve user onboarding and reduce drop-off rates.

## What is vLeap Relay?

vLeap Relay acts as a transaction relayer that covers gas fees for users who don't have sufficient native tokens (like EGLD on MultiversX) in their wallets. This eliminates the need for users to acquire native tokens before interacting with your application.

## Key Benefits

- **Instant Onboarding**: Users can start using dApps immediately without acquiring native tokens
- **Single Line Integration**: Add relay functionality with minimal code changes
- **Improved Conversion**: Significantly reduce user drop-off during onboarding
- **Better UX**: Provide a Web2-like experience in Web3 applications

## How It Works

1. User initiates a transaction through your application
2. vLeap Relay automatically detects insufficient native token balance
3. The transaction is processed by vLeap's relayer network, covering gas fees
4. Transaction executes on the blockchain seamlessly

## Supported Networks

- **MultiversX**: Full support for EGLD transactions and smart contract interactions

## Getting Started

Check out our [SDK documentation](./sdk.md) to get started with just a few lines of code.

## Support

- **Telegram**: [https://telegram.vleap.ai](https://telegram.vleap.ai)
- **GitHub**: [vLeap Group](https://github.com/vLeapGroup)
