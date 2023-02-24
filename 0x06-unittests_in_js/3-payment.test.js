const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment');
const chai = require('chai');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  const spy = sinon.spy(Utils, 'calculateNumber');
  it('Check the functionality of Utils', () => {
    sendPaymentRequestToApi(50, 51);
    chai.expect(spy.callCount).to.equal(1);
    chai.expect(spy.calledOnceWithExactly('SUM', 50, 51)).to.be.true;
    spy.restore();
  });
});
