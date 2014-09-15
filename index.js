'use strict';

/**
 * The constants as defined by the revised Spache Readability Formula.
 */

var SENTENCE_WEIGHT = 0.121,
    WORD_WEIGHT = 0.082,
    PERCENTAGE = 100,
    BASE = 0.659;

/**
 * Get the grade level of a given value according to the Spache Readability
 * Formula. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/Spache_Readability_Formula
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.unfamiliarWord - Number of (unique) unfamiliar
 *   words.
 * @return {number}
 */

function spache(counts) {
    if (!counts || !counts.sentence || !counts.word) {
        return NaN;
    }

    return BASE + (
        SENTENCE_WEIGHT * counts.word / counts.sentence
    ) + (
        WORD_WEIGHT * (counts.unfamiliarWord || 0) / counts.word * PERCENTAGE
    );
}

/**
 * Export `spache`.
 */

module.exports = spache;
