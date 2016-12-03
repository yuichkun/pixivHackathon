const REDIRECT_URL = 'localhost:1290/callback.html';
const CLIENT_ID = '55df75c5595934d36b97a158ff6e8a9b';
const CLIENT_SECRET = '293663bb9cb8795b589a531904b7eb8c';
var SC = require('soundcloud');
var http = require('http');

//
// function init(){
//   SC.initialize({
//     client_id: CLIENT_ID,
//     redirect_uri: REDIRECT_URL
//   });
//   console.log("init");
// }
// init();
// SC.get('/tracks', {
//   q: 'buskers', license: 'cc-by-sa'
// }).then(function(tracks) {
//   var stream_url = tracks[1].stream_url;
//   console.log(stream_url);
//   http.get(stream_url, function(res){
//     console.log(res.statusCode);
//   });
// });


var React = require('react');
var ScReact = React.createClass({
  render: function(){
    return (
      <ul>
        <li>あsdfkjぁsdkfj</li>
      </ul>
    );
  }
});

module.exports = ScReact;
