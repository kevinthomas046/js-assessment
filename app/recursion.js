if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		data.files.map(function(value) {console.log(value);});
    },

    permute: function(arr) {

    }
  };
});
