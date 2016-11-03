import React from 'react';

import Greeting from './Greeting';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';

class LoginControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button = null;

    if (isLoggedIn) {
      button = <LogoutButton onClick={ this.handleLogoutClick } />
    } else {
      button = <LoginButton onClick={ this.handleLoginClick } />
    }

    return (
      <div>
        <Greeting isLoggedIn={ isLoggedIn } />
        { button }
      </div>
    );
  }
}

export default LoginControl;
