var React = require('react');
var MyCanvas = require('./MyCanvas');
var p5 = require('p5');
var SlideShow = React.createClass({
  render: function(){
      console.log("imgURLs " + this.props.imgURLs);
      return (
        <div id="canvas"></div>
      );
  },
  componentDidMount: function(){
    var canvas = document.getElementById('canvas');
    var sketch = MyCanvas();
    new p5(sketch, canvas);
  }
});

module.exports = SlideShow;
