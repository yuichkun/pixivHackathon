var querystring = require('querystring');
const stringify = querystring.stringify;
var requestAPI = require('./requestAPI');

function getPath(type, queryObj){
  var path = "";
  switch (type){
    case 'works':
      var header = '/v1/works';
      var query = '?profile_image_sizes=px_16x16,px_50x50,px_170x170&image_sizes=small,medium&include_stats=1';
      path = header + '/54058752.json' + query;
      break;
    case 'search':
      var header = '/v1/search/works';
      var query = stringify(queryObj)
      path = header + '?' + query;
      break;
  }
  return path;
}

function searchData(word){
  return new Promise(function(resolve, reject){
      var queryObj = {
        'q': word
      };
      var path = getPath('search', queryObj);
      requestAPI.fetchData(path).then(function(data){
        resolve(data);
      });
  });
}

module.exports = searchData;
