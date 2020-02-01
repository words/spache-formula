# spache-formula

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [(revised) Spache
readability formula][formula].

See [`spache`][list] for a list of words which count as “known”.

## Install

[npm][]:

```sh
npm install spache-formula
```

## Use

```js
var spacheFormula = require('spache-formula')

spacheFormula({word: 30, sentence: 2, unfamiliarWord: 6}) // => 4.114

spacheFormula({word: 30, sentence: 2}) // => 2.474

spacheFormula() // => NaN
```

## API

### `spacheFormula(counts)`

Given the number of words (`word`), the number of sentences (`sentence`), and
the number of unique unfamiliar words (`unfamiliarWord`) in a document, returns
the grade level associated with the document.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — Like `flesch`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — Uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/words/smog-formula)
    — Like `gunning-fog`, without the need for advanced NLP tasks

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/spache-formula.svg

[build]: https://travis-ci.org/words/spache-formula

[coverage-badge]: https://img.shields.io/codecov/c/github/words/spache-formula.svg

[coverage]: https://codecov.io/github/words/spache-formula

[downloads-badge]: https://img.shields.io/npm/dm/spache-formula.svg

[downloads]: https://www.npmjs.com/package/spache-formula

[size-badge]: https://img.shields.io/bundlephobia/minzip/spache-formula.svg

[size]: https://bundlephobia.com/result?p=spache-formula

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Spache_Readability_Formula

[list]: https://github.com/wooorm/spache
