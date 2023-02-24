'use strict';
const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber (SUM)', () => {
  it('Check the output', () => {
    assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    assert.strictEqual(calculateNumber('SUM', 4.5, 1.4), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 0), 1);
    assert.strictEqual(calculateNumber('SUM', 0, 1), 1);
    assert.strictEqual(calculateNumber('SUM', 1, -1), 0);
    assert.strictEqual(calculateNumber('SUM', -1, 1), 0);
    assert.strictEqual(calculateNumber('SUM', 5.2, 1), 6);
    assert.strictEqual(calculateNumber('SUM', 1, 5.2), 6);
    assert.strictEqual(calculateNumber('SUM', 5.2, 5.2), 10);
    assert.strictEqual(calculateNumber('SUM', 5.4, 5.4), 10);
    assert.strictEqual(calculateNumber('SUM', 1, -6), -5);
    assert.strictEqual(calculateNumber('SUM', -6, 1), -5);
    assert.strictEqual(calculateNumber('SUM', 0, 0.0), 0);
    assert.strictEqual(calculateNumber('SUM', 0.0, 0), 0);
  });
});

describe('calculateNumber (SUBTRACT)', () => {
  it('Check the output', () => {
    assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 4.5, 1.4), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 0), 1);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 1), -1);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -1), 2);
    assert.strictEqual(calculateNumber('SUBTRACT', -1, 1), -2);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 1), 4);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, 5.2), -4);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.2, 5.2), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 5.4, 5.4), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 1, -6), 7);
    assert.strictEqual(calculateNumber('SUBTRACT', -6, 1), -7);
    assert.strictEqual(calculateNumber('SUBTRACT', 0, 0.0), 0);
    assert.strictEqual(calculateNumber('SUBTRACT', 0.0, 0), 0);
  });
});

describe('calculateNumber (DIVIDE)', () => {
  it('Check the output', () => {
    assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 4.5, 1.4), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0, 1), 0);
    assert.strictEqual(calculateNumber('DIVIDE', 1, -1), -1);
    assert.strictEqual(calculateNumber('DIVIDE', -1, 1), -1);
    assert.strictEqual(calculateNumber('DIVIDE', 5.2, 1), 5);
    assert.strictEqual(calculateNumber('DIVIDE', 1, 5.2), 0.2);
    assert.strictEqual(calculateNumber('DIVIDE', 5.2, 5.2), 1);
    assert.strictEqual(calculateNumber('DIVIDE', 5.4, 5.4), 1);
    assert.strictEqual(calculateNumber('DIVIDE', 1, -6), -0.16666666666666666);
    assert.strictEqual(calculateNumber('DIVIDE', -6, 1), -6);
    assert.strictEqual(calculateNumber('DIVIDE', 0, 0.0), 'Error');
    assert.strictEqual(calculateNumber('DIVIDE', 0.0, 0), 'Error');
  });
});
