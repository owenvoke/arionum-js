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
