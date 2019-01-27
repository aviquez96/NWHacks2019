import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import Navigation from './Components/Navigation/Navigation';
import Landing from './Components/Landing/Landing';
import SignUp from './Components/SignUp/SignUp';
import SignIn from './Components/SignIn/SignIn';
import Chatroom from './Components/Chatroom/Chatroom';
import Chat from './Components/Chat/Chat';
import Home from './Components/Home/Home';

import * as ROUTES from './Components/Constants/routes';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <hr />
      <Route exact path={ROUTES.LANDING} component={Landing} />
      <Route path={ROUTES.SIGNUP} component={SignUp} />
      <Route path={ROUTES.SIGNIN} component={SignIn} />
      <Route path={ROUTES.CHATROOM} component={Chatroom} />
      <Route path={ROUTES.CHAT} component={Chat} /> 
      <Route path={ROUTES.HOME} component={Home} /> 
    </div>
  </Router>
);

export default App;