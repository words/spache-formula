# spache-formula

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [(revised) Spache
readability formula][formula].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`spacheFormula(counts)`](#spacheformulacounts)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes an algorithm to detect ease of reading of English texts.

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

This algorithm isn’t based on syllabbles compared to some other algorithms,
which means it’s quicker to calculate.

See [`spache`][list] for a list of words which count as “known”.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install spache-formula
```

In Deno with [`esm.sh`][esmsh]:

```js
import {spacheFormula} from 'https://esm.sh/spache-formula@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {spacheFormula} from 'https://esm.sh/spache-formula@2?bundle'
</script>
```

## Use

```js
import {spacheFormula} from 'spache-formula'

spacheFormula({word: 30, sentence: 2, unfamiliarWord: 6}) // => 4.114

spacheFormula({word: 30, sentence: 2}) // => 2.474

spacheFormula() // => NaN
```

## API

This package exports the identifier `spacheFormula`.
There is no default export.

### `spacheFormula(counts)`

Given the number of words (`word`), the number of sentences (`sentence`), and
the number of unique unfamiliar words (`unfamiliarWord`) in a document, returns
the grade level associated with the document.

##### `counts`

Counts from input document.

###### `counts.sentence`

Number of sentences (`number`, required).

###### `counts.word`

Number of words (`number`, required).

###### `counts.unfamiliarWord`

Number of unfamiliar words (`number`, default: `0`).

##### Returns

Grade level associated with the document (`number`).

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Counts`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — like `flesch`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/words/smog-formula)
    — like `gunning-fog`, without the need for advanced NLP tasks

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/spache-formula/workflows/main/badge.svg

[build]: https://github.com/words/spache-formula/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/spache-formula.svg

[coverage]: https://codecov.io/github/words/spache-formula

[downloads-badge]: https://img.shields.io/npm/dm/spache-formula.svg

[downloads]: https://www.npmjs.com/package/spache-formula

[size-badge]: https://img.shields.io/bundlephobia/minzip/spache-formula.svg

[size]: https://bundlephobia.com/result?p=spache-formula

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Spache_Readability_Formula

[list]: https://github.com/wooorm/spache
