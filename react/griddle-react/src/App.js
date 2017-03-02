import React, { Component } from 'react';
import Griddle, { plugins, RowDefinition, ColumnDefinition } from 'griddle-react';
import cloneDeep from 'lodash/cloneDeep';

import data from './data';
import logo from './logo.svg';
import './App.css';

function _generateGriddleData(data) {
  let initialData = cloneDeep(data);

  return initialData
  .map(item => {
    item.name += ' ' + Math.random().toString().substring(2, 5);

    return item;
  });
}

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: _generateGriddleData(data),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ data: _generateGriddleData(data) });
    }, 1000);
  }

  renderNameComponent({ value }) {
    return (
      <span style={{ color: 'blue' }}>{value}</span>
    );
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Griddle
          data={this.state.data}
          plugins={[plugins.LocalPlugin]}
        >
          <RowDefinition>
            <ColumnDefinition id="name" title="Name" customComponent={this.renderNameComponent} />
            <ColumnDefinition id="created_at" title="Start" />
          </RowDefinition>
        </Griddle>
      </div>
    );
  }
}

export default App;
