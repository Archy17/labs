import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

///////////// components
import HelloWorld from './components/hello-world';
import IntroducingJsx from './components/introducing-jsx';
import Comment from './components/components-and-props/Comment';
import Clock from './components/Clock';
import Toggle from './components/Toggle';

const author = {
  avatarUrl: 'https://avatars2.githubusercontent.com/u/4119931?v=3&s=100',
  name: 'Eric Douglas'
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ logo }
               className="App-logo"
               alt="logo"
          />
          <h2>Welcome to React</h2>
        </div>

        <HelloWorld name="React World" />

        <IntroducingJsx />

        <Comment author={ author }
                 text="Lorem ipsum dolor sit amet, consectetur adipisicing..."
                 date={ new Date() }
        />

        <Clock />

        <Toggle />
      </div>
    );
  }
}

export default App;
