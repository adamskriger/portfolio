import App from './components/App.jsx'
import React from 'react';
import Exhibit from './components/Exhibit'
import Popstar from './components/Popstar'
import ProlificCapital from './components/ProlificCapital'
import Abcapparel from './components/Abcapparel'
import RealTimeYouTube from './components/RealTimeYouTube'
import Plantee from './components/Plantee'
import TheInformationStation from './components/TheInformationStation'


import Blogger from './components/Blogger'
import BlogShow from './components/BlogShow'

import {Router, Route, IndexRoute} from 'react-router';



export default (
<Router>
<Route path="/" component={App}>
</Route>
<Route path="/popstar" component={Popstar} />
<Route path="/prolificcapital" component={ProlificCapital} />
<Route path="/abcapparel" component={Abcapparel} />
<Route path="/youtube" component={RealTimeYouTube} />
<Route path="/plantee" component={Plantee} />
<Route path="/theinformationstation" component={TheInformationStation} />




<Route path="/blogger" component={Blogger} />
<Route path="blogshow/:key" component={BlogShow} />
</Router>

);
