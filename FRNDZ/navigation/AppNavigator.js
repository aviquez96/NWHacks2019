import React from 'react';
import { createSwitchNavigator,createStackNavigator,createAppContainer } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';
import AuthLoadingScreen from '../screens/AuthLoadingScreen';

const AuthStack = createStackNavigator({ LogIn: LoginScreen });
export default createAppContainer(createSwitchNavigator(
  {
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html

  Main: MainTabNavigator,
  AuthLoading: AuthLoadingScreen,
  Auth: AuthStack,
},
{
  initialRouteName: 'AuthLoading',
}
));
