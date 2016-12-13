import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Router, Route, hashHistory } from 'react-router';
import App from './app';
import About from './modules/About';
import Repos from './modules/Repos';
import Repo from './modules/Repo';

const renderApp = (NextApp) => {
  render(
    <AppContainer>
      <Router history={hashHistory}>
        <Route path="/" component={NextApp}>
          <Route path="/about" component={About} />
          <Route path="/repos" component={Repos}>
            <Route path="/repos/:userName/:repoName" component={Repo} />
          </Route>
        </Route>
      </Router>
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  );
};

renderApp(App);

if (module.hot) {
  module.hot.accept('./app', () => {
    const NextApp = require('./app').default;

    renderApp(NextApp);
  });
}
