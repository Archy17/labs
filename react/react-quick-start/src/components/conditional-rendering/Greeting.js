import React from 'react';

import UserGreeting from './UserGreeting';
import GuestGretting from './GuestGretting';

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <UserGreeting />;
  }

  return <GuestGretting />;
}

export default Greeting;
