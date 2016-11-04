import React from 'react';

const optionsData = [
  {
    text: 'Option A',
    value: 'A'
  },
  {
    text: 'Option B',
    value: 'B'
  },
  {
    text: 'Option C',
    value: 'C'
  }
];

class UncontrolledRadioButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'B' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this._makeRadioOptions = this._makeRadioOptions.bind(this);
  }

  _makeRadioOptions(data) {
    return data.map((item, index) =>
      <label key={ index }>
        <input type="radio"
               name="choice"
               value={ item.value }
               onChange={ this.handleChange }
        />

        { item.text }
      </label>
    );
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    console.log('Radio button value is: ' + this.state.value);
  }

  render() {
    return (
      <div>
        { this._makeRadioOptions(optionsData) }

        <br />
        <br />

        <button onClick={ this.handleSubmit }>
          Submit
        </button>
      </div>
    );
  }
}

export default UncontrolledRadioButton;
