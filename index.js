/**
 * @typedef {Object} SpaceFormulaCounts
 * @property {number} sentence
 * @property {number} word
 * @property {number} [unfamiliarWord]
 */

const sentenceWeight = 0.121
const wordWeight = 0.082
const percentage = 100
const base = 0.659

/**
 * Get the grade level of a given value according to the Spache Readability Formula. More information is available at WikiPedia: <https://en.wikipedia.org/wiki/Spache_Readability_Formula>
 *
 * @param {SpaceFormulaCounts} counts
 * @return {number}
 */
export function spacheFormula(counts) {
  if (!counts || !counts.sentence || !counts.word) {
    return Number.NaN
  }

  return (
    base +
    (sentenceWeight * counts.word) / counts.sentence +
    ((wordWeight * (counts.unfamiliarWord || 0)) / counts.word) * percentage
  )
}
