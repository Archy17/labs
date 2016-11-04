import React from 'react';

class ControlledTextarea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('Textarea value is: ' + this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        <textarea name="description"
                  value={ this.state.value }
                  onChange={ this.handleChange }
        />

        <br />

        <button onClick={ this.handleSubmit }>
          Submit
        </button>
      </div>
    );
  }
}

export default ControlledTextarea;
