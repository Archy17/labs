import React from 'react';

///////////// Properties
const element = <h1>Introducing JSX</h1>;
const user = {
  firstName: 'Eric',
  lastName: 'Douglas'
};

///////////// Functions
function formatName(user) {
  if (user) {
    return <em>{ `${user.firstName} ${user.lastName}` }</em>;
  }

  return <em>Stranger!</em>;
}

function IntroducingJsx() {
  return (
    <div>
      { element }

      <div>
        Hey, { formatName(user) }
      </div>

      <div>
        Hello, { formatName() }
      </div>
    </div>
  );
}

export default IntroducingJsx;
