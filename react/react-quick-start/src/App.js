import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

///////////// components
import HelloWorld from './components/hello-world';
import IntroducingJsx from './components/introducing-jsx';
import Comment from './components/components-and-props/Comment';
import Clock from './components/Clock';
import Toggle from './components/Toggle';
import Greeting from './components/conditional-rendering/Greeting';
import LoginControl from './components/conditional-rendering/LoginControl';
import Mailbox from './components/conditional-rendering/Mailbox';
import ConditionalOperator from './components/conditional-rendering/ConditionalOperator';
import WarningBanner from './components/conditional-rendering/WarningBanner';
import NumberList from './components/NumberList';
import ControlledComponent from './components/forms/ControlledComponent';
import MultipleSelect from './components/forms/MultipleSelect';
import ControlledTextarea from './components/forms/ControlledTextarea';
import UncontrolledRadioButton from './components/forms/UncontrolledRadioButton';
import Calculator from './components/lifting-state-up/Calculator';
import WelcomeDialog from './components/composition-vs-inheritance/WelcomeDialog';

const author = {
  avatarUrl: 'https://avatars2.githubusercontent.com/u/4119931?v=3&s=100',
  name: 'Eric Douglas'
};
const messages = ['React', 'Re: React', 'Re:Re: React'];
const numbers = [1, 2, 3, 4, 5];
const options = ['A', 'B'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img
            src={ logo }
            className="App-logo"
            alt="logo"
          />
          <h2>Welcome to React</h2>
        </div>

        <HelloWorld name="React World" />

        <IntroducingJsx />

        <Comment
          author={ author }
          text="Lorem ipsum dolor sit amet, consectetur adipisicing..."
          date={ new Date() }
        />

        <Clock />

        <Toggle />

        <Greeting isLoggedIn={ true } />

        <LoginControl />

        <Mailbox unreadMessages={ messages } />

        <ConditionalOperator name="" />

        <WarningBanner warn={ true } />
        <WarningBanner warn={ false } />

        <NumberList numbers={ numbers } />

        <ControlledComponent />

        <MultipleSelect options={ options } />

        <ControlledTextarea />

        <UncontrolledRadioButton />

        <Calculator />

        <WelcomeDialog />
      </div>
    );
  }
}

export default App;
