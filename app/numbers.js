if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
        var bitArray = parseInt(num, 10).toString(2).split('');
        return parseInt(bitArray[bitArray.length - bit], 10);
    },

    base10: function(str) {
        return parseInt(parseInt(str, 2).toString(10), 10);
    },

    convertToBinary: function(num) {
        var binaryString = parseInt(num, 10).toString(2);
        return binaryString.length !== 8 ? '0' + binaryString : binaryString;
    },

    multiply: function(a, b) {
        var decimalPrecision = ((+b).toFixed(20)).replace(/^-?\d*\.?|0+$/g, '').length;
        a.toFixed(decimalPrecision);
    }
  };
});

