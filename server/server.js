var express = require('express');
var app = express();
var searchData = require('./PixivAPi/handlePixivAPI');
const port = 1290;

app.use(express.static('../public'));
var server = app.listen(port, function(){
  console.log("server running on " + port );
});
app.get('/keyword',function(req, res){
    var keyword = req.query.value;
    searchData(keyword).then(function(rawData){
      var data = JSON.parse(rawData);
      console.log(data);

      var imgURLs = [];
      for(var i = 0; i < 5; i++){
        imgURLs.push(data.response[i].image_urls);
        console.log(i);
      }
      console.log("imga is ");
      console.log(imgURLs);
      res.send(imgURLs);
    });
});
