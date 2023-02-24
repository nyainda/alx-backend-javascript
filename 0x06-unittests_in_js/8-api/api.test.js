const { expect } = require('chai');

const URL = 'http://localhost:7865';
const request = require('request');

describe('Request to the root path', () => {
  it('Get /', (done) => {
    request(URL, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
