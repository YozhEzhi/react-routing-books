import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import App from './App';
import About from './components/About';
import Books from './components/Books';
import Home from './components/Home';
import NotFound from './components/NotFound';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="books" component={Books} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>,
  document.getElementById('root'),
);
