# The Index

The Warp Index is an off-chain service that provides powerful search capabilities for Warps registered in the registry. It continuously synchronizes with the registry to maintain an up-to-date searchable database of all registered Warps.

Using the index, clients can perform full-text search across Warp metadata, including names, descriptions, and more, making it easy to discover relevant Warps.

## Usage

The index is fully integrated into our SDKs, providing a seamless experience for searching and discovering Warps.

Javascript Example:

```ts
const index = new WarpIndex({
  indexUrl: '<url>',
  indexApiKey: '<key>',
  // ... other configuration
})

const hits = await index.search('your search term')
```
