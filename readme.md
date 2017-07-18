# spache-formula [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Formula to detect the grade level of text according to the
[(revised) Spache Readability Formula][formula].

See [`spache`][list] for a list of words which count as “known”.

## Installation

[npm][]:

```bash
npm install spache-formula
```

## Usage

```js
var spacheFormula = require('spache-formula');

spacheFormula({word: 30, sentence: 2, unfamiliarWord: 6});
// 4.114

spacheFormula({word: 30, sentence: 2});
// 2.474

spacheFormula()
// NaN
```

## API

### `spacheFormula(counts)`

Given the number of words (`word`), the number of sentences
(`sentence`), and the number of unique unfamiliar words
(`unfamiliarWord`) in a document, returns the grade level
associated with the document.

## Related

*   [`automated-readability`](https://github.com/wooorm/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/wooorm/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/wooorm/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/wooorm/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/wooorm/flesch-kincaid)
    — Like `flesch`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/wooorm/gunning-fog)
    — Uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/wooorm/smog-formula)
    — Like `gunning-fog`, without the need for advanced NLP tasks

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/spache-formula.svg

[travis]: https://travis-ci.org/wooorm/spache-formula

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/spache-formula.svg

[codecov]: https://codecov.io/github/wooorm/spache-formula

[npm]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[formula]: http://en.wikipedia.org/wiki/Spache_Readability_Formula

[list]: https://github.com/wooorm/spache
