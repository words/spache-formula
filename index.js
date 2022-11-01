/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} [unfamiliarWord=0]
 *   Number of unfamiliar words.
 */

/**
 * @typedef {Counts} SpaceFormulaCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const sentenceWeight = 0.121
const wordWeight = 0.082
const percentage = 100
const base = 0.659

/**
 * Given the number of words (`word`), the number of sentences (`sentence`),
 * and the number of unique unfamiliar words (`unfamiliarWord`) in a document,
 * returns the grade level associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @return {number}
 *   Grade level associated with the document.
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
