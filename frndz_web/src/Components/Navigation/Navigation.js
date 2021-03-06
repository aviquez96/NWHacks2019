import React from "react";
import { Link } from "react-router-dom";

import SignOutButton from "../SignOut/SignOut";
import * as ROUTES from "../Constants/routes";
import { AuthUserContext } from '../Session/index';

const Navigation = ({ authUser }) => (
  <AuthUserContext.Consumer>
      {authUser =>
        authUser ? <NavigationAuth /> : <NavigationNonAuth />
      }
    </AuthUserContext.Consumer>
);

const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.CHATROOM}>Chatroom</Link>
    </li>
    <li>
      <Link to={ROUTES.CHAT}>Chat</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGNIN}>Sign In</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGNUP}>Signup</Link>
    </li>
  </ul>
);

export default Navigation;
