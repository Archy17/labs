import React from 'react';
import { Route, IndexRouter } from 'react-router';
import App from './containers/App';
import HomePage from './components/HomePage';

// Map components to different routes.
// The parent component wraps other components and thus serves as  the entrance
// to other React components.
// IndexRoute maps HomePage component to the default route
export default (
  <Route path="/" component={App}>
    <IndexRouter component={HomePage} />
  </Route>
);
