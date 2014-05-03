if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
        return fn.call(obj);
    },

    functionFunction : function(str) {
        return function(message) {
            return str + ', ' + message;
        };
    },

    makeClosures : function(arr, fn) {
        var ret = [];

        var makeFn = function(val) {
            return function() { return fn(val); };
        };

        for (var i = 0, len = arr.length; i < len; i++) {
            ret.push(makeFn(arr[i]));
        }

        return ret;
    },

    partial : function(fn, str1, str2) {
        return function(punctuation) {
            return fn.call(this, str1, str2, punctuation);
        };
    },

    useArguments : function() {
        var sum = 0;
        for (var i = arguments.length - 1; i >= 0; i--) {
            sum += arguments[i];
        }
        return sum;
    },

    callIt : function(fn) {
        fn.apply(this, Array.prototype.slice.call(arguments, 1));
    },

    partialUsingArguments : function(fn) {
        var self = arguments;
        return function() {
            var args1 = Array.prototype.slice.call(self, 1),
            args2 = Array.prototype.slice.call(arguments, 0);
            if (args1.length > 0 && args2.length > 0) {
                args1 = args1.concat(args2);
                return fn.apply(this, args1);
            }
            else if (args2.length === 0) {
                return fn.apply(this, args1);
            }
            else {
                return fn.apply(this, args2);
            }
        };
    },

    curryIt : function(fn) {
        return function(a) {
            return function(b) {
                return function(c) {
                    return fn.call(this, a, b, c);
                };
            };
        };
    }
  };
});
