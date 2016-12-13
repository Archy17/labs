import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const App = ({ children }) => (
  <div>
    <h1>dek-react</h1>
    <ul role="nav">
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/repos">Repos</Link>
      </li>
    </ul>

    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
