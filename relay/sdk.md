# Relay SDK

The vLeap Relay SDK enables users to transact without gas fees. Add relay functionality with minimal code changes.

## Installation

```bash
npm install @vleap/relay
```

## Quick Start

```typescript
import { RelayClient } from '@vleap/relay'
import { Transaction } from '@multiversx/sdk-core/out'

const transaction = new Transaction({ ... })

// Relay the transaction (no config needed!)
const relayedTransaction = await new RelayClient({ project: /* your project id */ }).relay(transaction)
```

## Single Transaction Relay

```typescript
import { RelayClient } from '@vleap/relay'

const relayedTx = await new RelayClient({ project: /* your project id */ }).relay(transaction)
const signedTx = await wallet.signTransaction(relayedTx)
const result = await wallet.sendTransaction(signedTx)
```

## Batch Transaction Relay

```typescript
import { RelayClient } from '@vleap/relay'

const relayedTxs = await new RelayClient({ project: /* your project id */ }).relayBatch(transactions)
const signedTxs = await wallet.signTransactions(relayedTxs)
const results = await wallet.sendTransactions(signedTxs)
```

## Integration with MultiversX SDK

### With @multiversx/sdk-dapp

```typescript
import { RelayClient } from '@vleap/relay'
import { getAccountProvider, TransactionManager } from '@multiversx/sdk-dapp'

const provider = getAccountProvider()
const signedTransactions = await provider.signTransactions(txs)
const relayableTxs = await new RelayClient({ project: /* your project id */ }).relayBatch(signedTransactions)

const txManager = TransactionManager.getInstance()
const sentTransactions = (await txManager.send(
  relayableTxs
)) as SignedTransactionType[]
```

## Configuration (Optional)

```typescript
const relayer = new RelayClient({
  project: /* your project id */,
  env: 'mainnet', // or 'testnet' or 'devnet'. Default: mainnet
  api: 'https://relay.vleap.ai',
  timeout: 5000,
})
```

## Support

- **GitHub**: [vLeap Group](https://github.com/vLeapGroup)
- **Telegram**: [https://telegram.vleap.ai](https://telegram.vleap.ai)
