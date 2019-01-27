import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../Constants/routes';

const Navigation = () => (
  <div>
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
      <li>
        <Link to={ROUTES.CHATROOM}>Chatroom</Link>
      </li>
      <li>
        <Link to={ROUTES.CHAT}>Chat</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
    </ul>
  </div>
);

export default Navigation;