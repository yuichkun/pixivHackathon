var React = require('react');

var Select = React.createClass({

  handleChange: function(e){
    var keyword = e.target.value;
    this.setState({
      keyword: keyword
    });
  },

  handleSubmit: function(e){
    this.props.changeScene(this.state.keyword);
  },

  render: function(){
    return (
      <div>
        <input onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}></button>
      </div>
    );
  }
});

module.exports = Select;
