import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navigation from "./Components/Navigation/Navigation";
import Landing from "./Components/Landing/Landing";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import Chatroom from "./Components/Chatroom/Chatroom";
import Chat from "./Components/Chat/Chat";
import Home from "./Components/Home/Home";

import * as ROUTES from "./Components/Constants/routes";
import { withFirebase } from './Components/Firebase/index';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
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
  }
}

export default withFirebase(App);
