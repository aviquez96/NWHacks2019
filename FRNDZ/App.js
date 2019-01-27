/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './Components/Common';
import LoginForm from './Components/LoginForm'
import AppNavigator from './navigation/AppNavigator';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';


type Props = {};
export default class App extends Component<Props> {
  state = {loggedIn: false,}
  renderContent(){
    switch (this.state.loggedIn) {
      case true:
      return (
        <View style= {styles.viewStyle}>
        <Button Pressed= {() => firebase.auth().signOut()}>
          Log out
        </Button>
        </View>
      );
        break;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size= 'large' />;
    }
  }
  render()  {
    return (
      <View style= {styles.container}>
        <Header headText= 'Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    position: 'relative',
    flex:1
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
