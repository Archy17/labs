import React from 'react';

import Button from './Button';
import LikeButton from './LikeButton';

const App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>dek-react</h1>
        <p>
          Development Environment Kit for React applications.
        </p>
        <div className="container">
          <Button>
            <span>Some text here</span>
          </Button>
          <LikeButton />
        </div>
      </div>
    );
  }
});

export default App;
