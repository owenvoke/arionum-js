## Usage

**Set the node base URI**

```js
const arionum = new Arionum()
arionum.nodeAddress = 'https://node-uri-here'
```

**Get an address from a public key**

```js
arionum.getAddress('public-key').then(address => {
  console.log(address)
})
```

**Get a Base58-encoded version of a string**

```js
arionum.getBase58('string-data').then(base58 => {
  console.log(base58)
})
```

**Get the balance for an address**

```js
arionum.getBalance('address').then(balance => {
  console.log(balance)
})
```

**Get the pending balance for an address**

```js
arionum.getPendingBalance('address').then(pendingBalance => {
  console.log(pendingBalance)
})
```

**Get the transactions for an address**

```js
arionum.getTransactions('address').then(transactions => {
  console.log(transactions)
})
```

**Get the transactions for a public key**

```js
arionum.getTransactionsByPublicKey('public-key').then(transactions => {
  console.log(transactions)
})
```

**Get the transaction by its id**

```js
arionum.getTransaction('transaction-id').then(transaction => {
  console.log(transaction)
})
```

**Get the public key for an address**

```js
arionum.getPublicKey('address').then(publicKey => {
  console.log(publicKey)
})
```

**Generate a new account**

```js
arionum.generateAccount().then(accountDetails => {
  console.log(accountDetails)
})
```

**Get the current block**

```js
arionum.getCurrentBlock().then(block => {
  console.log(block)
})
```

**Get a specific block by its height**

```js
arionum.getBlock(1).then(block => {
  console.log(block)
})
```

**Get transactions for a specific block**

```js
arionum.getBlockTransactions('block-id').then(transactions => {
  console.log(transactions)
})
```

**Get version of the current node**

```js
arionum.getNodeVersion().then(version => {
  console.log(version)
})
```

**Get the number of transactions in the mempool**

```js
arionum.getMempoolSize().then(size => {
  console.log(size)
})
```

**Get a random number based on a specified block**

```js
arionum.getRandomNumber(1, 1, 1000).then(number => {
  console.log(number)
})
```

**Get a list of available masternodes on the network**

```js
arionum.getMasternodes().then(masternodes => {
  console.log(masternodes)
})
```

**Get the alias for a specific address**

```js
arionum.getAlias('address').then(alias => {
  console.log(alias)
})
```

**Send a transaction**

```js
let transaction = new Transaction()

transaction.value = 1
transaction.destinationAddress = '...'
transaction.publicKey = '...'
transaction.signature = '...'
transaction.date = 1
transaction.message = '...'

arionum.sendTransaction(transaction).then(result => {
  console.log(result)
})
```

**Get details about the nodes sanity process**

```js
arionum.getSanityDetails().then(sanityDetails => {
  console.log(sanityDetails)
})
```

**Get details about the node**

```js
arionum.getNodeInfo().then(nodeInfo => {
  console.log(nodeInfo)
})
```

**Check the validity of a signature**

```js
arionum.checkSignature('signature', 'data', 'public-key').then(signatureStatus => {
  console.log(signatureStatus)
})
```

**Check the validity of an address**

```js
arionum.checkAddress('address').then(addressStatus => {
  console.log(addressStatus)
})
```
