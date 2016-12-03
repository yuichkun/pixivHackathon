var request = require('request');
const ACCESS_TOKEN = 'QI5DoHkihXnbxT6wT8eQvBLMoGkFKFVlUF72v00IsFU';
const host = 'https://public-api.secure.pixiv.net';

function createHttpHeader(path){
  var url = host + path;
  var httpHeader = {
    url: url,
    method: 'GET',
    headers: {
        'Content-Type' : 'text',
        'Authorization': 'Bearer ' + ACCESS_TOKEN
    }
  };
  return httpHeader;
}

var fetchData = function(path){
  return new Promise(function(resolve, reject){
    var httpHeader = createHttpHeader(path);
    request(httpHeader, function(error, response, body){
      if(error) {
          console.log(error);
          reject(error);
      } else {
          console.log(response.statusCode + " success!");
          resolve(body);
      }
    });
  })
};



module.exports.fetchData = fetchData;
