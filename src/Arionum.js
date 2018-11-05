'use strict'

const axios = require('axios')

/**
 * The request endpoint for API calls.
 */
const API_ENDPOINT = '/api.php'
/**
 * The API status code for a successful response.
 */
const API_STATUS_OK = 'ok'

/**
 * Class Arionum
 */
class Arionum {
  /**
   * Retrieve the address for a specified public key.
   *
   * @param {string} publicKey
   * @return Promise
   */
  getAddress (publicKey) {
    return this
      .getJson({
        q: 'getAddress',
        public_key: publicKey
      })
  }

  /**
   * Convert a string to Base58.
   *
   * @param {string} data
   * @return Promise
   */
  getBase58 (data) {
    return this
      .getJson({
        q: 'base58',
        data: data
      })
  }

  /**
   * Retrieve the balance of a specified address.
   *
   * @param {string} address
   * @return Promise
   */
  getBalance (address) {
    return this
      .getJson({
        q: 'getBalance',
        account: address
      })
  }

  /**
   * Retrieve the balance of a specified alias.
   *
   * @param {string} alias
   * @return Promise
   */
  getBalanceByAlias (alias) {
    return this
      .getJson({
        q: 'getBalance',
        alias: alias
      })
  }

  /**
   * Retrieve the balance of a specified public key.
   *
   * @param {string} publicKey
   * @return Promise
   */
  getBalanceByPublicKey (publicKey) {
    return this
      .getJson({
        q: 'getBalance',
        public_key: publicKey
      })
  }

  /**
   * Retrieve the pending balance of a specified address (includes pending transactions).
   *
   * @param {string} address
   * @return Promise
   */
  getPendingBalance (address) {
    return this
      .getJson({
        q: 'getPendingBalance',
        account: address
      })
  }

  /**
   * Retrieve the transactions of a specified address.
   *
   * @param {string} address
   * @return Promise
   */
  getTransactions (address) {
    return this
      .getJson({
        q: 'getTransactions',
        account: address
      })
  }

  /**
   * Retrieve the transactions of a specified public key.
   *
   * @param {string} publicKey
   * @return Promise
   */
  getTransactionsByPublicKey (publicKey) {
    return this
      .getJson({
        q: 'getTransactions',
        public_key: publicKey
      })
  }

  /**
   * Retrieve a specified transaction by its id.
   *
   * @param {string} transactionId
   * @return Promise
   */
  getTransaction (transactionId) {
    return this
      .getJson({
        q: 'getTransaction',
        transaction: transactionId
      })
  }

  /**
   * Retrieve the public key of a specified address.
   *
   * @param {string} address
   * @return Promise
   */
  getPublicKey (address) {
    return this
      .getJson({
        q: 'getPublicKey',
        account: address
      })
  }

  /**
   * Generate a new public/private key pair and return these with the address.
   *
   * @return Promise
   */
  generateAccount () {
    return this
      .getJson({
        q: 'generateAccount'
      })
  }

  /**
   * Retrieve the current block as an object.
   *
   * @return Promise
   */
  getCurrentBlock () {
    return this
      .getJson({
        q: 'currentBlock'
      })
  }

  /**
   * Retrieve a block by its height.
   *
   * @param {int} height
   * @return Promise
   */
  getBlock (height) {
    return this
      .getJson({
        q: 'getBlock',
        height: height
      })
  }

  /**
   * Retrieve the transactions of a specified block.
   *
   * @param {string} blockId
   * @return Promise
   */
  getBlockTransactions (blockId) {
    return this
      .getJson({
        q: 'getBlockTransactions',
        block: blockId
      })
  }

  /**
   * Retrieve the version of the node.
   *
   * @return Promise
   */
  getNodeVersion () {
    return this
      .getJson({
        q: 'version'
      })
  }

  /**
   * Send a transaction.
   *
   * @param {Transaction} transaction
   * @return Promise
   */
  sendTransaction (transaction) {
    return this
      .getJson({
        q: 'send',
        val: transaction.value,
        dst: transaction.destinationAddress,
        public_key: transaction.publicKey,
        signature: transaction.signature,
        private_key: transaction.privateKey,
        date: transaction.date,
        message: transaction.message,
        version: transaction.version
      })
  }

  /**
   * Retrieve the number of transactions in the mempool.
   *
   * @return Promise
   */
  getMempoolSize () {
    return this
      .getJson({
        q: 'mempoolSize'
      })
  }

  /**
   * Retrieve a random number based on a specified block.
   *
   * @param {int}         height
   * @param {int}         minimum
   * @param {int|null}    maximum
   * @param {string|null} seed
   * @return Promise
   */
  getRandomNumber (height, minimum, maximum, seed = null) {
    return this
      .getJson({
        q: 'randomNumber',
        height: height,
        min: minimum,
        max: maximum,
        seed: seed
      })
  }

  /**
   * Check that a signature is valid against a public key.
   *
   * @param {string} signature
   * @param {string} data
   * @param {string} publicKey
   * @return Promise
   */
  checkSignature (signature, data, publicKey) {
    return this
      .getJson({
        q: 'checkSignature',
        signature: signature,
        data: data,
        public_key: publicKey
      })
      .then(data => {
        return data
      })
  }

  /**
   * Retrieve a list of registered masternodes on the network.
   *
   * @return Promise
   */
  getMasternodes () {
    return this
      .getJson({
        q: 'masternodes'
      })
      .then(data => {
        return data.masternodes
      })
  }

  /**
   * Retrieve the alias for an account by it's address.
   *
   * @param {string} address
   * @return Promise
   */
  getAlias (address) {
    return this
      .getJson({
        q: 'getAlias',
        account: address
      })
  }

  /**
   * Retrieve details about the nodes sanity process.
   *
   * @return Promise
   */
  getSanityDetails () {
    return this
      .getJson({
        q: 'sanity'
      })
  }

  /**
   * Retrieve details about the node.
   *
   * @return Promise
   */
  getNodeInfo () {
    return this
      .getJson({
        q: 'node-info'
      })
  }

  /**
   * Check that an address is valid.
   * Optionally validate it against the corresponding public key.
   *
   * @param {string} address
   * @param {string|null} publicKey
   * @return Promise
   */
  checkAddress (address, publicKey = null) {
    return this
      .getJson({
        q: 'checkAddress',
        account: address,
        public_key: publicKey
      })
  }

  /**
   * @returns void
   */
  set nodeAddress (uri) {
    this._nodeAddress = uri
  }

  /**
   * @returns string
   */
  get nodeAddress () {
    return this._nodeAddress
  }

  /**
   * @param {Object} params
   * @return {*|Promise}
   */
  async getJson (params) {
    return axios
      .get(this.nodeAddress + API_ENDPOINT, {
        params
      })
      .then(response => {
        let data = response.data

        if (data.status === API_STATUS_OK) {
          return data.data
        }

        throw Error('An unknown API error occurred.')
      })
  }
}

// Export Arionum class
module.exports = Arionum

// Allow use of default import syntax in TypeScript
module.exports.default = Arionum
