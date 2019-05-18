'use strict'

module.exports = spache

var sentenceWeight = 0.121
var wordWeight = 0.082
var percentage = 100
var base = 0.659

// Get the grade level of a given value according to the Spache Readability
// Formula.
// More information is available at WikiPedia:
// <https://en.wikipedia.org/wiki/Spache_Readability_Formula>
function spache(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return NaN
  }

  return (
    base +
    (sentenceWeight * counts.word) / counts.sentence +
    ((wordWeight * (counts.unfamiliarWord || 0)) / counts.word) * percentage
  )
}
