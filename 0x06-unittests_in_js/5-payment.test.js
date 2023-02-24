const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const { expect } = require('chai');

describe('sendPaymentRequestToApi', () => {
  beforeEach(() => {
    sinon.spy(console, 'log');
  });

  it('call sendPaymentRequestToAPI with 100, and 20 and expect 120', () => {
    sendPaymentRequestToApi(100, 20);
    expect(console.log.calledWith('The total is: 120')).to.be.true;
  });

  it('call sendPaymentRequestToAPI with 10, and 10 and expect 20', () => {
    sendPaymentRequestToApi(10, 10);
    expect(console.log.calledWith('The total is: 20')).to.be.true;
  });

  afterEach(() => {
    console.log.restore();
  });
});
