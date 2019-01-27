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

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  state= { loggedIn:null};

    componentWillMount(){
      firebase.initializeApp({
        apiKey: 'AIzaSyADyu6HKZT3LK5lHX-cXAaQaxVaSG4XFk0',
        authDomain: "auth-06.firebaseapp.com",
        databaseURL: "https://auth-06.firebaseio.com",
        projectId: "auth-06",
        storageBucket: "auth-06.appspot.com",
        messagingSenderId: "151275976346"
      });
      firebase.auth().onAuthStateChanged((user) => {
        if(user) {
          this.setState({loggedIn:true});
        }
        else {
          this.setState({loggedIn:false});
        }
      });

    }
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
      <View>
        <Header headText= 'Authentication' />
        {this.renderContent()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
