import App from './components/App.jsx'
import React from 'react';
import About from './components/About'

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
</Route>
<Route path="/about" component={About} />
</Router>

);
