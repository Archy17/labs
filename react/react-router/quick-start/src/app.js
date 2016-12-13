import React, { PropTypes } from 'react';
import NavLink from './modules/NavLink';

const App = ({ children }) => (
  <div>
    <h1>dek-react</h1>
    <ul role="nav">
      <li>
        <NavLink to="/" onlyActiveOnIndex={true}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/repos">
          Repos
        </NavLink>
      </li>
    </ul>

    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.object
};

export default App;
