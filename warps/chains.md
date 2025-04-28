# LightSpeed Chains

LightSpeed Chains, previously known as Sovereign Chains, empower developers to launch and interact with custom blockchains that seamlessly connect to the MultiversX main network. These app-specific chains offer enhanced performance, flexibility, and interoperability while leveraging the MultiversX ecosystem's infrastructure.

Warps, which are inscribed and registered on the MultiversX main network, can be executed across any whitelisted LightSpeed Chain when specified in the action configuration. Whitelisted LightSpeed Chains and their configurations are managed through the [Registry](./registry.md).

##

The `chain` parameter allows developers to target a specific LightSpeed Chain for individual Warp actions of type `transfer`, `contract`, or `query`. If omitted, the action defaults to the MultiversX main chain.

```js
{
  "actions": [
    {
      "type": "contract",
      "chain": "example-lightspeed-chain",
      "func": "execute",
    },
    {
      "type": "query",
      "chain": "another-lightspeed-chain",
      "func": "getBalance",
    }
  ]
}
```

In this example, the Warp executes a contract action on `example-lightspeed-chain` and a query action on `another-lightspeed-chain`. This flexibility allows a single Warp to interact with multiple LightSpeed Chains or the main network within the same Blueprint.

## Available Chains

- Upcoming.

To register your LightSpeed chain, please get in touch with us through [Telegram](https://telegram.usewarp.to).
