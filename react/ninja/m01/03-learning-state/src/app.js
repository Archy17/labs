import React, { Component } from 'react';

import Square from './Square';
import Button from './Button';

class App extends Component {
  constructor() {
    super();

    this.state = {
      text: 'Eric',
      color: 'purple'
    };

    this.toggleName = this.toggleName.bind(this);
  }

  toggleName() {
    let name = this.state.text === 'Eric' ? 'Eric Douglas' : 'Eric';

    this.setState({ text: name });
  }

  renderButtons() {
    const colors = ['purple', 'yellow', 'blue'];

    return colors.map(color => (
      <Button
        key={color}
        color={color}
        handleClick={() => this.setState({ color })}
      >
        {color}
      </Button>
    ));

  }

  render() {
    return (
      <div>
        <span onClick={this.toggleName}>
          {this.state.text}
        </span>

        <div>
          <Square color={this.state.color} />
          {this.renderButtons()}
        </div>
      </div>
    );
  }
}

export default App;
