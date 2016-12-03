var express = require('express');
var app = express();
var port = 1290;
app.use(express.static('../public'));
var server = app.listen(port, function(){
  console.log("server running on " + port );
});
