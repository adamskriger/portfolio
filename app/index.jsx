import './css/main.css';
import './css/skeleton.css';


import { Router, browserHistory } from 'react-router';
import routes from './routes'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
const logger = require('morgan');
var bs = require('bootstrap');
import {Route, IndexRoute} from 'react-router';
import ReactBoostrap from 'react-bootstrap'

ReactDOM.render(
  <Router history={browserHistory} routes={routes} >

    <Route path="/" component={App} />


  </Router>





  , document.getElementById('app'));
