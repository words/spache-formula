/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module spache-formula
 * @fileoverview Detect ease of reading according to the
 *   the (revised) Spache Readability Formula (1974).
 */

'use strict';

/* Expose. */
module.exports = exports = spache;

/* Constants. */
var SENTENCE_WEIGHT = 0.121;
var WORD_WEIGHT = 0.082;
var PERCENTAGE = 100;
var BASE = 0.659;

/**
 * Get the grade level of a given value according to
 * the Spache Readability Formula. More information
 * is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/Spache_Readability_Formula
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.unfamiliarWord - Number of (unique)
 *   unfamiliar words.
 * @return {number}
 */
function spache(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return NaN;
  }

  return BASE +
    (SENTENCE_WEIGHT * counts.word / counts.sentence) +
    (WORD_WEIGHT * (counts.unfamiliarWord || 0) / counts.word * PERCENTAGE);
}
