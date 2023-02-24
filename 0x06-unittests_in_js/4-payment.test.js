const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('Check the functionality of Utils', () => {
    const stub = sinon.stub(Utils, 'calculateNumber');
    stub.withArgs('SUM', 100, 20).returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(spy.callCount).to.equal(1);
    expect(spy.calledWith('The total is: 10')).to.be.true;

    stub.restore();
    spy.restore();
  });
});
