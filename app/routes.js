import React from 'react';
import {Router, Route, IndexRoute, browserHistory, routes} from 'react-router';
import App from './components/App.jsx'
import About from './components/About.jsx'
import ReactDOM from 'react-dom';
import PostsIndex from 'PostsIndex.jsx'




export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
    <Route path = "about" component={About} />

  </Route>
  );
