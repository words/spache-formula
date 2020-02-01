'use strict'

var test = require('tape')
var nan = require('is-nan')
var spache = require('.')

test('spacheFormula', function(t) {
  t.ok(nan(spache()), 'NaN when an invalid value is given')
  t.equal(round(spache({word: 30, sentence: 2, unfamiliarWord: 6})), 4.114)
  t.equal(round(spache({word: 30, sentence: 2})), 2.474)
  t.end()
})

function round(val) {
  return Math.round(val * 1e6) / 1e6
}
