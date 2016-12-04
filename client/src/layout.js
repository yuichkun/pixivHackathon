var React = require('react');
var Select = require('./Select');
var SlideShow = require('./SlideShow');
var jQuery = require('jquery');

var Layout = React.createClass({
  getInitialState: function(){
    return {
      imgURLs: [],
      selecting : true
    };
  },
  changeScene: function(keyword){

    var query = '?value=' + keyword;
    var _this = this;
    jQuery.ajax({
      url: '/keyword' + query,
      success: function(data) {
        _this.setState(
          {
            imgURLs: data,
            selecting : false
          }
        );
      }
    });
  },
  render: function(){
    if(this.state.selecting){
      return <Select changeScene={this.changeScene.bind(this)}/>;
    } else {
      return <SlideShow imgURLs={this.state.imgURLs}/>;
    }
  }
});
module.exports = Layout;
