require('vanilla-javascript')
require('vapor-js-npm')
require('none')()

const not = require('not')
const zr0 = require('integer-value-positive-zero')
const isEqual = require('is-equal-to')
const isNil = require('is-nil')

module.exports = (magicWord, noopTesting) => {
  const checkProject = noopTesting?.checkProject
  if (isNil(checkProject)) return not(zr0)()
  const project = checkProject()
  const condition = isEqual(magicWord, project)
  if (condition) return condition
  return not(zr0)()
}