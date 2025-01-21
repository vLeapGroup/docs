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

### Link

Creates a button linking to any web resource, including other Warps:

- **`type`**: `link`
- **`label`**: Text displayed on the action button.
- **`url`**: URL to link to.

## Argument and Input Types

Warps utilize an advanced typing system for arguments and inputs. Type hints are provided as prefix in the form `type:value` and are required for all arguments in the `args` array.

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
- **Example of composite**: `variadic:composite:string|uint64:abc|123,def|456,ghi|789`

#### Composite

A `composite` type combines multiple different types into a single value, allowing for complex data structures.

- **Example**: `composite:string|uint64:hello|123`

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

## Next Step

A Warp can specify a follow-up action using the `next` field, which can contain another Warp ID or a URL for redirection. This field can be defined globally or per action.
