import App from './components/App.jsx'
import React from 'react';
import Exhibit from './components/Exhibit'
import Popstar from './components/Popstar'

import Blogger from './components/Blogger'
import BlogShow from './components/BlogShow'

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
</Route>
<Route path="/popstar" component={Popstar} />
<Route path="/blogger" component={Blogger} />
<Route path="blogshow/:key" component={BlogShow} />
</Router>

);
