# Specifications

A Warp is a base64-encoded JSON object in a standardized format (called **Blueprints**) stored within the `txData` of a transaction executed on the MultiversX network. The hash of this transaction serves as the unique identifier of the Warp. The [Registry](./registry.md) can be used to assign aliases to Warps for more user-friendly link sharing.

Inscribing the Warp on the blockchain ensures its actions cannot be modified after sharing, providing security and immutability.

## Warp Blueprint JSON Schema

Find the JSON schemas for validating Blueprints in the GitHub repository's [schemas](https://github.com/vLeapGroup/warps-specs/tree/main/schemas) directory.

## Action Types

- `contract`: Constructs a signable smart contract transaction.
- `link`: Displays a simple link.
