import App from './components/App.jsx'
import React from 'react';
import Exhibit from './components/Exhibit'
import Blogger from './components/Blogger'
import BlogShow from './components/BlogShow'

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
</Route>
<Route path="/exhibit" component={Exhibit} />
<Route path="/blogger" component={Blogger} />
<Route path="blogshow/:key" component={BlogShow} />
</Router>

);
