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

Warps utilize an advanced typing system for arguments and inputs.

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
