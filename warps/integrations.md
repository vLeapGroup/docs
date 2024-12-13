# Integrate Warps

Client applications can accept encoded Warp identifiers or aliases through the query parameter `warp`. The urlencoded value of the `warp` parameter is typically prefixed with the identifier type (`alias:`, `hash:`), defaulting to `alias:` if no type is specified.

## Identifier Types

- **`alias:`** - Use this prefix for alias identifiers.
- **`hash:`** - Use this prefix for transaction hash identifiers.
- **No Prefix** - Defaults to `alias:` if no prefix is specified.

### Super Clients

Super Clients are equal to any other client but they accept Warp identifiers directly within the URL path for even cleaner-looking URLs. One such example is `usewarp.to/<warp-id>`.

You can propose to register your Super Client by submitting the URL of your web app to configuration via a pull request.

## Examples

- **Using `hash` prefix**: `https://yourapp.com?warp=hash%3Ad08a405f6d11b5506889bf6cd822fec2a8ef826c170fd1920ff5241f3883adb9`

- **Using `alias` prefix**: `https://yourapp.com?warp=alias%3Amyalia`

- **No prefix (defaults to `alias`)**: `https://yourapp.com?warp=myalias`

With the identifier information, clients then fetch Warp information from the blockchain and generate a UI with actions based on the parameters. When a user clicks an action, the client reacts based on the Action Type. For transactions, it constructs the transaction based on defined parameters and prompts the user to sign and broadcast it to the blockchain network.

A simple default client will be provided as part of the development of this protocol / standard. For example: `https://usewarp.to?warp=<your-warp-id>`

But Warps may be easily integrated into other clients like wallets too:

- [xPortal](https://xportal.com): e.g. accept `https://xportal.com?warp=delegate` to display a UI in-app
- [Multiversᕽ Browser Extension](https://chromewebstore.google.com/detail/multiversx-wallet/dngmlblcodfobpdpecaadgfbcggfjfnm): e.g. to unwrap Warp links shared on X.com and inject a generate UI with on-chain actions directly within Posts

## Features to Support

The primary objective of clients is to bring Warps closer to the end user and remove maximum friction in user experience. To achieve this, we recommend adding support for as many of the following features as you deem relevant and useful:

### Link Detection

User-generated content should be continiously screened for valid Warp Links of any kind. This includes Warp Links from Super-Clients
