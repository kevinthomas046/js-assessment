exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    return new Promise(function (resolve, reject) {
        resolve(value);
    });
  },

  manipulateRemoteData : function(url) {
    return fetch('/data/testdata.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (responseObject) {
            return responseObject.people.reduce(function (prev, current) {
                prev.push( current.name ); return prev;
            }, []).sort();
        });
  }
};
