import React from 'react';

const Title = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>Hey, {this.props.name}</h1>

        <label htmlFor="input">Label htmlFor</label>
        <input type="text" id="input"/>
      </div>
    );
  }
});

export default Title;
