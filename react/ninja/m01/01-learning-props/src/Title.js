import React from 'react';

const Title = React.createClass({
  getDefaultProps() {
    return {
      name: 'Stranger',
      lastName: 'without Last Name'
    };
  },

  render: function() {
    return (
      <div className="container">
        <h1>Hey, {`${this.props.name} ${this.props.lastName}`}</h1>

        <label htmlFor="input">Label htmlFor</label>
        <input type="text" id="input"/>
      </div>
    );
  }
});

export default Title;
