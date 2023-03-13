var assert = require('assert');
var utils = require("../modules/utils")

describe('utils', function() {
  describe('#add()', function() {
    it('should return 2 when 1 and 1 is added', function() {
      assert.equal(utils.add(1,1), 2);
    });
  });

  describe('#multiply()', function() {
    it('should return 4 when 2 and 2 is multiplied', function() {
      assert.equal(utils.multiply(2,2), 4);
    });
  });

  describe('#subtract()', function() {
    it('should return 4 when 8 and 4 is subtracted', function() {
      assert.equal(utils.subtract(8,4), 4);
    });
  });

  describe('#divide()', function() {
    it('should return 4 when 8 and 2 is divided', function() {
      assert.equal(utils.divide(8,2), 4);
    });
  });

});