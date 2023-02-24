const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber (SUM)', () => {
  it('Check the output', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    expect(calculateNumber('SUM', 4.5, 1.4)).to.equal(6);
    expect(calculateNumber('SUM', 1, 0)).to.equal(1);
    expect(calculateNumber('SUM', 0, 1)).to.equal(1);
    expect(calculateNumber('SUM', 1, -1)).to.equal(0);
    expect(calculateNumber('SUM', -1, 1)).to.equal(0);
    expect(calculateNumber('SUM', 5.2, 1)).to.equal(6);
    expect(calculateNumber('SUM', 1, 5.2)).to.equal(6);
    expect(calculateNumber('SUM', 5.2, 5.2)).to.equal(10);
    expect(calculateNumber('SUM', 5.4, 5.4)).to.equal(10);
    expect(calculateNumber('SUM', 1, -6)).to.equal(-5);
    expect(calculateNumber('SUM', -6, 1)).to.equal(-5);
    expect(calculateNumber('SUM', 0, 0.0)).to.equal(0);
    expect(calculateNumber('SUM', 0.0, 0)).to.equal(0);
  });
});

describe('calculateNumber (SUBTRACT)', () => {
  it('Check the output', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 4.5, 1.4)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 1, 0)).to.equal(1);
    expect(calculateNumber('SUBTRACT', 0, 1)).to.equal(-1);
    expect(calculateNumber('SUBTRACT', 1, -1)).to.equal(2);
    expect(calculateNumber('SUBTRACT', -1, 1)).to.equal(-2);
    expect(calculateNumber('SUBTRACT', 5.2, 1)).to.equal(4);
    expect(calculateNumber('SUBTRACT', 1, 5.2)).to.equal(-4);
    expect(calculateNumber('SUBTRACT', 5.2, 5.2)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 5.4, 5.4)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 1, -6)).to.equal(7);
    expect(calculateNumber('SUBTRACT', -6, 1)).to.equal(-7);
    expect(calculateNumber('SUBTRACT', 0, 0.0)).to.equal(0);
    expect(calculateNumber('SUBTRACT', 0.0, 0)).to.equal(0);
  });
});

describe('calculateNumber (DIVIDE)', () => {
  it('Check the output', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 4.5, 1.4)).to.equal(5);
    expect(calculateNumber('DIVIDE', 1, 0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0, 1)).to.equal(0);
    expect(calculateNumber('DIVIDE', 1, -1)).to.equal(-1);
    expect(calculateNumber('DIVIDE', -1, 1)).to.equal(-1);
    expect(calculateNumber('DIVIDE', 5.2, 1)).to.equal(5);
    expect(calculateNumber('DIVIDE', 1, 5.2)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 5.2, 5.2)).to.equal(1);
    expect(calculateNumber('DIVIDE', 5.4, 5.4)).to.equal(1);
    expect(calculateNumber('DIVIDE', 1, -6)).to.equal(-0.16666666666666666);
    expect(calculateNumber('DIVIDE', -6, 1)).to.equal(-6);
    expect(calculateNumber('DIVIDE', 0, 0.0)).to.equal('Error');
    expect(calculateNumber('DIVIDE', 0.0, 0)).to.equal('Error');
  });
});
