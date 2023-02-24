const Utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const calc = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${calc}`);
  return calc;
}

module.exports = sendPaymentRequestToApi;
