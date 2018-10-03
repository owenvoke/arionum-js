# arionum-js

[![Latest Version on npm][ico-version]][link-npm]
[![Software License][ico-license]](LICENSE.md)
[![Build Status][ico-travis]][link-travis]
[![Style CI][ico-styleci]][link-styleci]
[![Code Coverage][ico-code-quality]][link-code-quality]
[![Total Downloads][ico-downloads]][link-downloads]

An API wrapper for the Arionum cryptocurrency node.

## Install

Via npm

```bash
$ npm install arionum-js
```

Via Yarn

```bash
$ yarn add arionum-js
```

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
arionum.getAlias('address').then(getAlias => {
  console.log(getAlias)
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

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information on what has changed recently.

## Contributing

Please see [CONTRIBUTING](.github/CONTRIBUTING.md) and [CODE_OF_CONDUCT](.github/CODE_OF_CONDUCT.md) for details.

## Security

If you discover any security related issues, please email owzie123@gmail.com instead of using the issue tracker.

## Credits

- [pxgamer][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[ico-version]: https://img.shields.io/npm/v/arionum-js.svg?style=flat-square
[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square
[ico-travis]: https://img.shields.io/travis/pxgamer/arionum-js/master.svg?style=flat-square
[ico-styleci]: https://styleci.io/repos//shield
[ico-code-quality]: https://img.shields.io/codecov/c/github/pxgamer/arionum-js.svg?style=flat-square
[ico-downloads]: https://img.shields.io/npm/dt/arionum-js.svg?style=flat-square

[link-npm]: https://www.npmjs.com/package/arionum-js
[link-travis]: https://travis-ci.com/pxgamer/arionum-js
[link-styleci]: https://styleci.io/repos/
[link-code-quality]: https://codecov.io/gh/pxgamer/arionum-js
[link-downloads]: https://www.npmjs.com/package/arionum-js
[link-author]: https://github.com/pxgamer
[link-contributors]: ../../contributors
