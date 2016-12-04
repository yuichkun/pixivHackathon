var express = require('express');
var request = require('request');
var requestAPI = require('./PixivAPi/requestAPI');
var url = require('url');
var app = express();
var searchData = require('./PixivAPi/handlePixivAPI');
var fs = require('fs');

const port = 1290;

app.use(express.static('../public'));
var server = app.listen(port, function(){
  console.log("server running on " + port );
});
app.get('/keyword',function(req, res){
    var keyword = req.query.value;
    searchData(keyword).then(function(data){
      var body = JSON.parse(data.body);
      var imgURLs = [];
      console.log("ippai aru yo");
      var responseLength = body.response.length;
      for(var i = 0; i < responseLength; i++){
        imgURLs.push(body.response[i].image_urls.small);
      }
      res.header("Access-Control-Allow-Origin", "*");
      // console.log("imgURLs are ", imgURLs);
      res.send(imgURLs);
    });
});

app.get('/image',function(req,res){
  var url_parts = url.parse(req.url, true);
  var img_url = url_parts.query.url;
  // console.log(img_url);
  requestAPI.fetchData(img_url,null).then(function(obj){
    // console.log("response header");
    // console.log(obj.header);
    res.writeHead(200, {
      'Content-Type': obj.header['content-type']
    });
    res.end(new Buffer(obj.body, 'binary'));
    fs.writeFileSync('test.jpeg', obj.body, 'binary');
  });

});
