# LightSpeed Chains

LightSpeed Chains, formerly Sovereign Chains, enable developers to create custom blockchains that connect seamlessly to the MultiversX main network, offering more flexibility.

Warps are inscribed and registered on the main network and can be executed on whitelisted LightSpeed Chains if specified in the action. Whitelisted chains and their configurations are managed in the [Registry](./registry.md).

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
