var React = require('react');
var ScReact = require('./ScReact');

var Layout = React.createClass({
  render: function(){
    return (
      <div>
        <h1>おはよう</h1>
        <ScReact />
      </div>
    );
  }
});
module.exports = Layout;
