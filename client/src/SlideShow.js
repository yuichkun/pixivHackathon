var React = require('react');
var MyCanvas = require('./MyCanvas');
var p5 = require('p5');

var SoundCloud = require('./SoundCloud');

const REDIRECT_URL = 'localhost:1290/callback.html';
const CLIENT_ID = '55df75c5595934d36b97a158ff6e8a9b';
const CLIENT_SECRET = '293663bb9cb8795b589a531904b7eb8c';
var SC = require('soundcloud');


var SlideShow = React.createClass({
  getInitialState:function(){
    return {
      src: null
    };
  },
  componentWillMount:function(){
    var _this = this;
    this.fetchData().then(function(data){
      console.log("congrats");
      console.log(data);
      // console.log("sldkfjlasdkjflksadjfl");
      // console.log(_this.state);
      // _this.setState({
      //   src: data.html
      // });
    });
  },
  fetchData: function(){
    var _this = this;
    return new Promise(function(resolve, reject){
      SC.initialize({
        client_id: CLIENT_ID
      });

      SC.get('/tracks', {
        genres: 'punk', bpm: { from: 120 }
      }).then(function(tracks) {
        var track_url = tracks[0].permalink_url;
        SC.oEmbed(track_url, { auto_play: true }).then(function(oEmbed) {
          var html = oEmbed.html;
          var begin = html.indexOf('src=') + 5;
          var end = html.indexOf('></if') -1;
          var mySrc = html.slice(begin,end);
          console.log(mySrc);

          _this.setState({
            src: mySrc
          });
          resolve(_this.state);
        });
      });
    });
  },
  render: function(){
      return (
        <div>
          <div id="canvas"></div>
          <SoundCloud src={this.state.src}/>
        </div>
      );
  },
  componentDidMount: function(){
    var canvas = document.getElementById('canvas');
    var sketch = MyCanvas(this.props.imgURLs);
    new p5(sketch, canvas);
  }
});

module.exports = SlideShow;
