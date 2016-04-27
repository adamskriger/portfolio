import './main.css';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import routes from './routes'

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import About from './components/About.jsx';
import PostsIndex from './components/PostsIndex.jsx'

import alt from './libs/alt';
import storage from './libs/storage';
import persist from './libs/persist';
const logger = require('morgan');
persist(alt, storage, 'app');
var bs = require('bootstrap');
