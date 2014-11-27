# spache-formula [![Build Status](https://img.shields.io/travis/wooorm/spache-formula.svg?style=flat)](https://travis-ci.org/wooorm/spache-formula) [![Coverage Status](https://img.shields.io/coveralls/wooorm/spache-formula.svg?style=flat)](https://coveralls.io/r/wooorm/spache-formula?branch=master)

Formula to detect the grade level of text according to the (revised) Spache Readability Formula.

See [spache](https://github.com/wooorm/spache) for a list of words which count as “known”.

## Installation

npm:
```sh
$ npm install spache-formula
```

Component:
```sh
$ component install wooorm/spache-formula
```

Bower:
```sh
$ bower install spache-formula
```

## Usage

```js
var spacheFormula = require('spache-formula');

spacheFormula({
    'word' : 30,
    'sentence' : 2,
    'unfamiliarWord' : 6
});
// 4.114

spacheFormula({
    'word' : 30,
    'sentence' : 2
});
// 2.474

spacheFormula() // NaN
```

## API

### spache(counts)

Given the number of words (`word`), the number of sentences (`sentence`), and the number of unique unfamiliar words (`unfamiliarWord`) in a document, returns the grade level associated with the document.

## Related

- [automated-readability](https://github.com/wooorm/automated-readability) — Uses character count instead of an error-prone syllable parser;
- [coleman-liau](https://github.com/wooorm/coleman-liau) — Uses letter count instead of an error-prone syllable parser;
- [dale-chall-formula](https://github.com/wooorm/dale-chall-formula) — Uses a dictionary; suited for higher reading levels;
- [flesch](https://github.com/wooorm/flesch) — Uses syllable count;
- [flesch-kincaid](https://github.com/wooorm/flesch-kincaid) — Like **flesch-formula**; returns U.S. grade levels;
- [gunning-fog](https://github.com/wooorm/gunning-fog) — Uses syllable count; hard to implement with a computer (needs POS-tagging and Named Entity Recognition);
- [smog-formula](https://github.com/wooorm/smog-formula) — Like **gunning-fog-index**; without the need for advanced NLP tasks.

## License

MIT © [Titus Wormer](http://wooorm.com)
