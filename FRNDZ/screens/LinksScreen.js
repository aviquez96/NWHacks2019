import React,{ Component } from 'react';
import {SafeAreaView, Text, View, TouchableOpacity,Image,Dimensions, TouchableHighlight } from 'react-native';
import { Header,Input, Button, Spinner, Card, CardSection} from '../Components/Common';
import UploadScreen from './UploadScreen';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: {
      visible: false,
    },
  };

  render() {
    return (
      <SafeAreaView style={styles.loggedIncontainer}>
        <Text> Hi <Text>
      </SafeAreaView>
    );
  }
}
