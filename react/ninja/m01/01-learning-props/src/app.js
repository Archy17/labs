import React, { Component } from 'react';
import Title from './Title';
import Square from './Square';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Title name="Someone" />

        {['red', 'green', 'blue'].map((color) => (
          <Square
            key={color}
            color={color}
          />
        ))}
      </div>
    );
  }
}

export default App;
