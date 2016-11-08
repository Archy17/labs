import React from 'react';

import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import { toCelsius, toFahrenheit, tryConvert } from './helper';

class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state =  { value: '', scale: 'c' };

    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
  }

  handleCelsiusChange(value) {
    this.setState({
      scale: 'c',
      value
    });
  }

  handleFahrenheitChange(value) {
    this.setState({
      scale: 'f',
      value
    });
  }

  render() {
    const scale = this.state.scale;
    const value = this.state.value;
    const celsius = scale === 'f' ? tryConvert(value, toCelsius) : value;
    const fahrenheit = scale === 'c' ? tryConvert(value, toFahrenheit) : value;

    return (
      <div>
        <TemperatureInput
          scale="c"
          value={ celsius }
          onChange={ this.handleCelsiusChange }
        />
        <TemperatureInput
          scale="f"
          value={ fahrenheit }
          onChange={ this.handleFahrenheitChange }
        />
        <BoilingVerdict celsius={ parseFloat(celsius) } />
      </div>
    );
  }
}

export default Calculator;
