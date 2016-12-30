import React, { PropTypes } from 'react';
import { browserHistory } from 'react-router';
import NavLink from './NavLink';

const handleSubmit = (event) => {
  event.preventDefault();

  const userName = event.target.elements[0].value;
  const repo = event.target.elements[1].value;
  const path = `/repos/${userName}/${repo}`;

  browserHistory.push(path);
};

const Repos = ({ children }) => (
  <div>
    <h2>Repos</h2>

    <ul>
      <li>
        <NavLink to="/repos/reactjs/react-router">React Router</NavLink>
      </li>
      <li>
        <NavLink to="/repos/facebook/react">React</NavLink>
      </li>
      <li>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="userName"/> / {' '}
          <input type="text" placeholder="repo"/>{' '}
          <button type="submit">Go</button>
        </form>
      </li>
    </ul>

    {children}
  </div>
);

Repos.propTypes = {
  children: PropTypes.object
};

export default Repos;