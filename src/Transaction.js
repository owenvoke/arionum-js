'use strict'

/**
 * Class Transaction
 */
class Transaction {
  /**
   * Transaction Constructor
   */
  constructor () {
    this.version = 1
  }

  /**
   * @param {number} value
   * @return void
   */
  set value (value) {
    this._val = value
  }

  /**
   * @param {string} destinationAddress
   * @return void
   */
  set destinationAddress (destinationAddress) {
    this._dst = destinationAddress
  }

  /**
   * @param {string} publicKey
   * @return void
   */
  set publicKey (publicKey) {
    this._public_key = publicKey
  }

  /**
   * @param {string} signature
   * @return void
   */
  set signature (signature) {
    this._signature = signature
  }

  /**
   * @param {string} privateKey
   * @return void
   */
  set privateKey (privateKey) {
    this._private_key = privateKey
  }

  /**
   * @param {int} date
   * @return void
   */
  set date (date) {
    this._date = date
  }

  /**
   * @param {string} message
   * @return void
   */
  set message (message) {
    this._message = message
  }

  /**
   * @param {int} version
   * @return void
   */
  set version (version) {
    this._version = version
  }

  /**
   * @return number
   */
  get value () {
    return this._val
  }

  /**
   * @return string
   */
  get destinationAddress () {
    return this._dst
  }

  /**
   * @return string
   */
  get publicKey () {
    return this._public_key
  }

  /**
   * @return string
   */
  get signature () {
    return this._signature
  }

  /**
   * @return string
   */
  get privateKey () {
    return this._private_key
  }

  /**
   * @return int
   */
  get date () {
    return this._date
  }

  /**
   * @return string
   */
  get message () {
    return this._message
  }

  /**
   * @return int
   */
  get version () {
    return this._version
  }
}

// Export Transaction class
module.exports = Transaction

// Allow use of default import syntax in TypeScript
module.exports.default = Transaction
