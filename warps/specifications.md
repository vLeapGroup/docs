# Warps Specifications

A Warp is a base64-encoded JSON object, known as a **Blueprint**, stored in the `txData` of a transaction on the MultiversX network. The transaction hash acts as the unique identifier for each Warp. The [Registry](./registry.md) can be used to assign aliases for easier sharing.

Storing the Warp on the blockchain ensures security and immutability, as its actions cannot be altered once shared.

## Warp Blueprint JSON Schema

The JSON schemas for validating Blueprints are available in the [GitHub repository's schemas directory](https://github.com/vLeapGroup/warps-specs/tree/main/schemas).

## Warp Blueprint Structure

- **`protocol`**: Specifies the protocol and version (e.g., `warp:0.1.0`).
- **`name`**: Identifies the Warp, used in public galleries.
- **`title`**: Displayed to the user.
- **`description`**: Provides details to the user.
- **`preview`**: URL to a preview image.

## Actions

Actions are rendered as buttons below the Warp information. They achieve different outcomes and are categorized as follows:

### Smart Contract Call

Prompts the user to sign a transaction with a smart contract:

- **`type`**: `contract`
- **`label`**: Text displayed on the action button.
- **`address`**: Smart contract address.
- **`func`**: Function to call in the smart contract.
- **`args`**: Fixed set of typed arguments for the contract.
- **`value`**: Amount of native tokens to transfer (e.g., EGLD).
- **`gasLimit`**: Gas limit for the transaction.
- **`inputs`**: User-defined inputs for `value` or positional `args`.

### Smart Contract Queries

Fetches results from a smart contract view function:

- **`type`**: `query`
- **`label`**: Text displayed on the action button.
- **`address`**: Smart contract address.
- **`func`**: Function to call in the smart contract.
- **`args`**: Fixed set of typed arguments for the query.
- **`inputs`**: User-defined inputs for positional `args`.

### Data Collection

Collect data from the user and send it to a defined destination (HTTP endpoint, ...):

- **`type`**: `collect`
- **`label`**: Text displayed on the action button.
- **`destination`**: Text displayed on the action button.
  - **`url`**: Your custom HTTP endpoint
  - **`method`**: HTTP method Example: `GET`, `POST`
  - **`headers`**: Key-value pairs of HTTP headers.
- **`inputs`**: User-defined inputs which will be sent to `destination`.
  - **Example**: `{ "inputs": { "a": 1, "b": 2 } }`

### Link

Creates a button linking to any web resource, including other Warps:

- **`type`**: `link`
- **`label`**: Text displayed on the action button.
- **`url`**: URL to link to.

## Argument and Input Types

Warps utilize an advanced typing system for both arguments and inputs, allowing for flexibility and precision in smart contract interactions. Below are the base types available, along with descriptions and examples for nested types.

### Base Types

- **`string`**: Represents a sequence of characters. Example: `string:hello`
- **`uint8`**: An 8-bit unsigned integer. Example: `uint8:255`
- **`uint16`**: A 16-bit unsigned integer. Example: `uint16:789`
- **`uint32`**: A 32-bit unsigned integer. Example: `uint32:456`
- **`uint64`**: A 64-bit unsigned integer, suitable for larger numbers. Example: `uint64:1234567890`
- **`biguint`**: An arbitrarily large unsigned integer. Example: `biguint:123456789012345678901234567890`
- **`bool`**: A boolean value, either `true` or `false`. Example: `bool:true`
- **`address`**: Represents a blockchain address. Example: `address:erd1qqqqqqqqqqqqqqqpqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqplllst77y4l`
- **`token`**: Represents a token identifier. Example: `token:TOKEN-123456`
- **`codemeta`**: Metadata for smart contract deployments, typically in hexadecimal. Example: `codemeta:0106`
- **`hex`**: A hexadecimal encoded string. Example: `hex:1234`
- **`esdt`**: Represents an ESDT (eStandard Digital Token) transfer in the form of `token|nonce|amount`. Example: `esdt:AAA-123456|5|100`

### Input Types Only

- **`nft`**: Displays an NFT selector to the user and is treated as `esdt`.

### Nested Types

The base types can be combined and nested with the following variations:

#### Option

An `option` type can either contain a value or be empty. It is useful for optional fields.

- **Example with value**: `option:string:hello`
- **Example without value**: `option:string`

#### Optional

Similar to `option`, but specifically used for fields that might not be provided.

- **Example with value**: `optional:string:hello`
- **Example without value**: `optional:string`

#### List

A `list` type holds multiple values of the same type, separated by commas.

- **Example with values**: `list:string:hello,world`
- **Example without values**: `list:string:`

#### Variadic

A `variadic` type allows for a variable number of arguments, often used for functions that can take multiple inputs.

- **Example of uint64**: `variadic:uint64:123,456,789`
- **Example of composite**: `variadic:composite(string|uint64):abc|123,def|456,ghi|789`

#### Composite

A `composite` type combines multiple different types into a single value, allowing for complex data structures.

- **Example**: `composite(string|uint64):hello|123`

## User Inputs

User-defined inputs allow customization of smart contract calls and queries. Inputs have various sources and positions.

### Sources

- **`field`**: Value from a user-generated text input field.
- **`query`**: Value from a URL query parameter.

### Positions

Defines the use of an input value:

- **`value`**: Used as the native value in a smart contract call.
- **`arg:{1,2,3,...}`**: Used at a specific position in the `args` array.

### Modifiers

Modify inputs before executing a transaction:

- **`scale:{number}`**: Scales input values by a fixed number of decimals (e.g., `scale:18`).
- **`scale:{Input Field Name}`**: Scales based on another input field (e.g., `scale:Decimals`).

### Input Fields

Define custom user inputs for actions:

- **`name`**: Display text for fields or URL query parameter name.
- **`description`**: Details displayed to the user.
- **`type`**: Input type.
- **`position`**: Input position.
- **`source`**: Input source.
- **`modifier`**: Optional modifier for the input.
- **`required`**: Indicates if the input is mandatory.
- **`min`**: Minimum value or length.
- **`max`**: Maximum value or length.

## Variables

To make your Warps more flexible and adaptive, you can use variables via the `vars` field in the root of your Warp:

```json
{
  "vars": {
    "MY_VARIABLE": "value"
  }
}
```

Once defined, you can then use the `MY_VARIABLE` **anywhere** inside the Warp contents:

```json
{
  "vars": {
    "EGLD_VALUE": "1000000000000000000",
    "ANY_ARG": "first-arg"
  },
  "actions": [
    {
      "type": "contract",
      "func": "pay",
      "value": "{{EGLD_VALUE}}",
      "args": ["string:{{ANY_ARG}}"]
    }
  ]
}
```

Variables can be set once and reused multiple times.

### Dynamic Variables from External Sources

Variables can also be dynamically set based on external sources, allowing Warps to adapt to different environments and user inputs.

#### From URL Query Parameters

A variable can be populated dynamically from a query parameter in the URL.

```json
{
  "vars": {
    "USER_ADDRESS": "query:address"
  },
  "actions": [
    {
      "type": "contract",
      "func": "register",
      "args": ["address:{{USER_ADDRESS}}"]
    }
  ]
}
```

In this example, `USER_ADDRESS` will be populated from the address query parameter in the URL (`?address=erd1...`).

## Bot Metadata

The `bot` field provides additional information intended for AI agents or other automated systems. It is hidden from the user and does not affect the Warp’s UI or behavior.

This field can be used in two places:

1. **At the Warp Root** – Provides a general description of the Warp for AI agents.
2. **Inside Inputs** – Helps AI understand how to process and interpret user inputs.

---

### 1. Warp-Level `bot` Field

At the root level, `bot` can describe the overall purpose of the Warp in a way that AI systems can interpret.

##### Example:

```json
{
  "protocol": "warp:0.4.0",
  "name": "JoAi: User Onboarding",
  "bot": "This Warp is designed to onboard new JoAi users by collecting essential information.",
  "actions": [...]
}
```

### 2. Input-Level bot Field

Within inputs, bot provides AI-specific instructions on handling user-provided data.

```json
{
  "name": "User Name",
  "bot": "The user's name for further identification.",
  "type": "string",
  "required": true
}
```

Another example with more context:

```json
{
  "name": "Source",
  "bot": "How the user discovered JoAi. Give examples like Google search, friend recommendation, blog post, etc.",
  "type": "string"
}
```

By using `bot` in these specific locations, AI agents can better understand the intent behind a Warp and how to handle user inputs efficiently.

## Next Step

A Warp can specify a follow-up action using the `next` field, which can contain another Warp ID or a URL for redirection. This field can be defined globally or per action.
