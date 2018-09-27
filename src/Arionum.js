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
   * @param params
   * @return {*|Promise}
   */
  getJson (params) {
    return axios
      .get(this.nodeAddress + API_ENDPOINT, {
        params
      })
      .then((response) => {
        let data = response.data

        if (data.status === API_STATUS_OK) {
          return data
        }

        throw Error('An unknown API error occurred.')
      })
  }
}
