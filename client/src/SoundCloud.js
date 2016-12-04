var React = require('react');
var SoundCloud = React.createClass({

  getInitialState: function(){
    return {
      html : null
    };
  },

  handleChange: function(html){
    // this.setState({
    //     html: html
    // });
  },

  render: function(){
    return (
      <div className="hide">
      <iframe width="100%" height="400" scrolling="no" frameborder="no" src={this.props.src}></iframe>
      </div>
    );
    // return  this.props.src;
  }

});




module.exports = SoundCloud;
