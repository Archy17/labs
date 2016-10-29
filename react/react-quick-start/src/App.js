import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

///////////// components
import HelloWorld from './components/hello-world';
import IntroducingJsx from './components/introducing-jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <HelloWorld name="React World" />

        <IntroducingJsx />
      </div>
    );
  }
}

export default App;
