import test from 'tape'
import {spacheFormula} from './index.js'

test('spacheFormula', function (t) {
  t.ok(Number.isNaN(spacheFormula()), 'NaN when an invalid value is given')
  t.equal(
    round(spacheFormula({word: 30, sentence: 2, unfamiliarWord: 6})),
    4.114
  )
  t.equal(round(spacheFormula({word: 30, sentence: 2})), 2.474)
  t.end()
})

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
