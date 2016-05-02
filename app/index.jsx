import './main.css';
import { Router, browserHistory } from 'react-router';
import routes from './routes'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';


const logger = require('morgan');
var bs = require('bootstrap');
import {Route, IndexRoute} from 'react-router';


ReactDOM.render(
  <Router history={browserHistory} routes={routes} >

    <Route path="/" component={App} />
    <Route path="/about" component={About} />


  </Router>





  , document.getElementById('app'));
