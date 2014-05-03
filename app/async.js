if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {

    },

    manipulateRemoteData : function(url) {
        var dfd = $.Deferred(),
            peopleData;
        $.ajax({
            url: url,
            success: function(data) {
                peopleData = data.people.map(function(value) {return value.name;});
            }
        });

        return dfd.promise();
    }
  };
});
