'use strict'

var test = require('tape')
var spache = require('.')

test('spacheFormula', function (t) {
  t.ok(Number.isNaN(spache()), 'NaN when an invalid value is given')
  t.equal(round(spache({word: 30, sentence: 2, unfamiliarWord: 6})), 4.114)
  t.equal(round(spache({word: 30, sentence: 2})), 2.474)
  t.end()
})

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
