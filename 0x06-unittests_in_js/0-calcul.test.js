const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  it('check that two numbers without float part are the expected sum', function () {
    assert.equal(calculateNumber(1, 3), 4);
    assert.equal(calculateNumber(1, 8), 9);
    assert.equal(calculateNumber(5, 7), 12);
  });
  it('check that the sum is working correctly with negative numbers', function () {
    assert.equal(calculateNumber(-5, 10), 5);
    assert.equal(calculateNumber(-6, -12), -18);
    assert.equal(calculateNumber(-999, -1), -1000);
    assert.equal(calculateNumber(5, -10), -5);
  });
  it('The sum is executed correctly with a 0', function () {
    assert.equal(calculateNumber(0, 5), 5);
    assert.equal(calculateNumber(10, 0), 10);
    assert.equal(calculateNumber(0, 0), 0);
    assert.equal(calculateNumber(-30, 0), -30);
  });
  it('Check first number is integer number and second number is float number', function () {
    assert.equal(calculateNumber(14, 0.7), 15);
    assert.equal(calculateNumber(14, 0.4), 14);
  });
  it('Check second number is integer number and first number is float number', function () {
    assert.equal(calculateNumber(0.7, 14), 15);
    assert.equal(calculateNumber(0.4, 14), 14);
  });
});
