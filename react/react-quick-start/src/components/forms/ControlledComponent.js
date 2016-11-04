import React from 'react';

class ControlledComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value.substr(0, 140)
    });
  }

  handleSubmit(e) {
    console.log(`Text field value is: ${ this.state.value }`);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <input type="text"
          placeholder="Hello!"
          value={ this.state.value }
          onChange={ this.handleChange }
        />

        <button onClick={ this.handleSubmit }>
          Submit
        </button>
      </div>
    );
  }
}

export default ControlledComponent;
