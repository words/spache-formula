import assert from 'node:assert'
import test from 'node:test'
import {spacheFormula} from './index.js'

test('spacheFormula', function () {
  // @ts-expect-error runtime.
  assert.ok(Number.isNaN(spacheFormula()), 'NaN when an invalid value is given')
  assert.equal(
    round(spacheFormula({word: 30, sentence: 2, unfamiliarWord: 6})),
    4.114
  )
  assert.equal(round(spacheFormula({word: 30, sentence: 2})), 2.474)
})

/**
 * @param {number} value
 * @return {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
