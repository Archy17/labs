import React from 'react';

import FancyBorder from './FancyBorder';

function WelcomeDialog() {
  return (
    <div>
      <FancyBorder color="red">
        <h1>Welcome</h1>

        <p>
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>

      <FancyBorder color="green">
        <h1>Welcome</h1>

        <p>
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>

      <FancyBorder color="blue">
        <h1>Welcome</h1>

        <p>
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    </div>
  );
}

export default WelcomeDialog;
