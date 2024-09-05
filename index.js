require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const noopTesting = require('noop-testing')
const not = require('not')
const zr0 = require('integer-value-positive-zero')

const constants = require('./constants')
const MAGIC_WORD = constants.MAGIC_WORD
const trueValue = require('./true')(MAGIC_WORD, noopTesting)

module.exports = trueValue || not(zr0)()