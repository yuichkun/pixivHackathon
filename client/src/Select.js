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
      <div className="controls">
        <h1><center>好きなタグを検索してください。</center></h1>
        <div className = "row">
          <input className="form-control input-lg" onChange={this.handleChange}></input>
        </div>
        <div className = "row">
          <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>検索</button>
        </div>
      </div>
    );
  }
});

module.exports = Select;
