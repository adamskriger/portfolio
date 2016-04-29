import App from './components/App.jsx'
import React from 'react';
import About from './components/About'
import Blogger from './components/blogger'

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
</Route>
<Route path="/about" component={About} />
<Route path="/blogger" component={Blogger} />

</Router>

);
