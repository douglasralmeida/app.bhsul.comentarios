var chai = require('chai');
var expect = chai.expect;
var CartSummary = require('../feedback.js');

describe('exibirtudo', function() {
  it('exibirtudo() should return 0 if no items are passed in', function() {
    var exibirtudo = new exibirtudo([]);
    expect(exibirtudo()).to.equal(0);
  });
});
