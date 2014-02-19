if (typeof define !== 'function') { var define = require('amdefine')(module); }

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */
define(function() {
  return {
    globals : function() {
    },

    functions : function(flag) {
      if (flag) {
        var getValue = function() { return 'a'; }
      } else {
        var getValue = function() { return 'b'; }
      }

      return getValue();
    },

    parseInt : function(num) {
      if (num.indexOf('0x') !== -1)
        return 0;
      return parseInt(num);
    },

    identity : function(val1, val2) {
      return val1 === val2;
    }
  };
});
