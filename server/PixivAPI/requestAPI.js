var request = require('request');
const ACCESS_TOKEN = 'QI5DoHkihXnbxT6wT8eQvBLMoGkFKFVlUF72v00IsFU';


function createHttpHeader(path, encode){
  var httpHeader = {
    url: path,
    method: 'GET',
    headers: {
        'Authorization': 'Bearer ' + ACCESS_TOKEN,
        'referer': 'http://www.pixiv.net/hammer'
    },
    encoding: encode
  };
  return httpHeader;
}

var fetchData = function(path, encode){
  return new Promise(function(resolve, reject){
    var httpHeader = createHttpHeader(path, encode);
    console.log("httpHeader is ", httpHeader);
    request(httpHeader, function(error, response, body){
      if(error) {
          console.log(error);
          reject(error);
      } else {
          var obj = {
            header: response.headers,
            body: body
          };
          resolve(obj);
      }
    });
  })
};



module.exports.fetchData = fetchData;
