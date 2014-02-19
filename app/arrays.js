if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(previousValue, currentValue) {
            return previousValue + currentValue;
        }, 0);
    },

    remove : function(arr, item) {
        for(var i = arr.length; i--;) {
            if (arr[i] === item) {
                arr.splice(i, 1);
            }
        }
        return arr;
    },

    removeWithoutCopy : function(arr, item) {
        return this.remove(arr, item);
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    prepend : function(arr, item) {
        arr.unshift(item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        return arr.filter(function(value) {
            return value === item;
        }).length;
    },

    duplicates : function(arr) {
        var lastDup;
        return arr.sort().filter( function(value, index, object) {
            if(index >= 0 && value === object[index - 1] && value !== lastDup) {
                lastDup = value;
                return value;
            }
        });
    },

    square : function(arr) {
        return arr.map( function(value) {
            return value * value;
        });
    },

    findAllOccurrences : function(arr, target) {
        var indices = [];
        for (var index = 0; index < arr.length - 1; index++) {
            if (arr[index] === target) {
                indices.push(index);
            }
        }
        return indices;
    }
  };
});
