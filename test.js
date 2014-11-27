'use strict';

/**
 * Dependencies.
 */

var spacheFormula,
    assert;

spacheFormula = require('./');
assert = require('assert');

/**
 * Utilities.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Tests.
 */

describe('spacheFormula()', function () {
    it('should be of type `function`', function () {
        assert(typeof spacheFormula === 'function');
    });

    it('should work', function () {
        var result;

        result = spacheFormula();

        assert(result !== result);

        roundAssert(spacheFormula({
            'word': 30,
            'sentence': 2,
            'unfamiliarWord': 6
        }), 4.114);

        roundAssert(spacheFormula({
            'word': 30,
            'sentence': 2
        }), 2.474);
    });
});
