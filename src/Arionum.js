'use strict'

const axios = require('axios').default

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
module.exports = class Arionum {
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
