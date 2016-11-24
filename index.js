'use strict';

module.exports = exports = spache;

var SENTENCE_WEIGHT = 0.121;
var WORD_WEIGHT = 0.082;
var PERCENTAGE = 100;
var BASE = 0.659;

/* Get the grade level of a given value according to
 * the Spache Readability Formula. More information
 * is available at WikiPedia:
 * See: http://en.wikipedia.org/wiki/Spache_Readability_Formula. */
function spache(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return NaN;
  }

  return BASE +
    (SENTENCE_WEIGHT * counts.word / counts.sentence) +
    (WORD_WEIGHT * (counts.unfamiliarWord || 0) / counts.word * PERCENTAGE);
}
