// Login Screen - login to application through ledgerdocs login. Fetch call made
// to server with username and password as parameters.
import React, {Component} from 'react';
import {SafeAreaView,View, Text,AsyncStorage,TouchableOpacity, Image, Switch, KeyboardAvoidingView} from 'react-native';
import {Button,Card, CardSection,InputVertical, Spinner,Header} from '../Components/Common';
import firebase from 'firebase';

export default class LoginScreen extends React.Component{

  //Firebase

  state = { email: '', password: '', error: '', loading: false,
  loggedIn: 'false', secure: true, remember: false};

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

  static navigationOptions = {
    header: null
  };

  constructor(props){
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const currentUser = JSON.parse (await AsyncStorage.getItem('User'));
     if(currentUser.remember){
    this.setState({
      email: currentUser.user_name,
      password: currentUser.password,
      remember: currentUser.remember
    });
}
  };

renderButton(){
  if(this.state.loading){
    return <Spinner size= "small" /> ;
  }
  return (
    <View style= {styles.loginButton}>
    <Button style={styles.buttonStyle}>
        Log in
      </Button>
      </View>
  );
}
//<Button style={styles.buttonStyle} Pressed = {this.authenticate.bind(this)}>

  render() {
    return (
      <SafeAreaView style={styles.loggedIncontainer}>
      <KeyboardAvoidingView
      style={{backgroundColor:'#DDECF9', flex:1, color: "#365C80"}}
      behavior="position"
      keyboardVerticalOffset={-100}
      enabled>
      <View style={styles.container}>
      <View style={styles.hb_container}>
        <View style={styles.hb_center}>
        <Image
          style= {{alignSelf: 'center'}}
          source={require('../assets/images/Logo.png')}
        />
        </View>
      </View>

      <View style={styles.si_container}>
      <Text style= {{ fontSize: 23, color: "#365C80"}}>
      Log in to your Account
      </Text>
      </View>

      <View style={styles.cs_container} >
      <View style={styles.inputFieldContainer}>
          <InputVertical
            placeholder= ''
            label = 'Email'
            value = {this.state.email}
            onChangeText={email => this.setState({email})}
            />
            <TouchableOpacity activeOpacity = { 0 } style = { styles.visibilityBtn }>
            </TouchableOpacity>
            </View>

      <View style={styles.inputFieldContainer}>
        <InputVertical
          secureTextEntry = {this.state.secure}
          placeholder= ""
          label = "Password"
          value = {this.state.password}
          onChangeText={password => this.setState({password})} />
          <TouchableOpacity activeOpacity = { 0.8 } style = { styles.visibilityBtn } onPress = { this.managePasswordVisibility }>
            <Image source = { ( this.state.secure ) ? require('../assets/images/hide.png') : require('../assets/images/view.png') } style = { styles.btnImage } />
          </TouchableOpacity>
          </View>
       <Text style= {styles.errorTextStyle}>
        {this.state.error}
       </Text>
       <View style= {styles.switchStyle}>
       <Switch
       onValueChange={ (value) => {
         this.setState({ remember: value });
       }}
       value={ this.state.remember }
       trackColor= {{false: "#fff" ,true: "#fff"}}
       thumbColor= {(this.state.remember == true) ? "#365C80" :"#C7C4C4" }
       ios_backgroundColor= {"#fff"}
       />
         <Text style= {styles.switchTextStyle}>
           Remember Me
         </Text>
         </View>
      </View>
      <View style={styles.c_container} >
       {this.renderButton()}
     <View style= {styles.signup}>
       <Text style= {{ alignSelf: 'center', fontSize: 14}}> Don't Have an Account? <Text style={{textDecorationLine: 'underline'}}> Sign up </Text></Text>
     </View>
      </View>

      </View>
      </KeyboardAvoidingView>
</SafeAreaView>
    );
  }
}
const styles = {
  loggedIncontainer:
      {
        flex: 1,
        backgroundColor:'#DDECF9',
      },
      container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        backgroundColor:'#DDECF9'
      },
      //HeaderBanner = hb
      hb_container: {
        height: '20%',
        backgroundColor: '#DDECF9',
      },
      hb_left: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        top: 0,
        bottom: 0,
        left: '5%',
      },
      hb_center: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 0,
        left: 0,
        right: 0,
      },
      //Single Image = hb
      si_container: {
        height: '10%',
        backgroundColor: '#DDECF9',
        justifyContent: 'center',
        alignItems: 'center'
      },
      si_text_container: {
        display:'inline-block',

      },
      //Camera Settings = cs
      cs_container: {
        height: '40%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
      },
      cs_text_container: {
        height: '18%',
        position: 'absolute',
        bottom: '0%',
        left: '0%'

      },
      // Camera = c
      c_container: {
        height: '30%',
        justifyContent: 'flex-start',
        alignItems: 'center',
        zIndex: 1
      },
      c_text_container: {
        height: '20%',
        position: 'absolute',
        bottom: '20%'
      },
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
    color: "#365C80"
  },
  buttonStyle: {
    flex: 1,
    backgroundColor: '#365C80',
    borderRadius:5,
    borderWidth:1,
    borderColor:'#007aff',
    justifyContent: 'center',
    alignSelf: 'stretch'
  },
  inputFieldContainer:  {
    padding: 5,
    backgroundColor :'#DDECF9',
    position: 'relative',
    alignItems: 'flex-start',
    height: 100,
     maxHeight:500 ,
     paddingLeft:8,
     flexDirection: 'row',
     color: "#365C80"

  },
   loginButton:  {
     padding: 20,
    backgroundColor :'#DDECF9',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    width: 350,
     maxHeight:500 ,
  },
  signup:{
    alignItems:"center",
    backgroundColor :'#DDECF9',
    position: 'relative',
    alignItems: 'flex-start',
    height: '30%',
     flexDirection: 'column',
     color: "#365C80"
  },
  btnImage:
  {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
  visibilityBtn:
  {
    position: 'relative',
    right: 3,
    height: 60,
    width: 35,
    padding: 6,
    marginTop : 30,
    alignItems: 'flex-end'
  },
  switchStyle:
  {
    position: 'relative',
    padding: 5,
    flexDirection: 'row',
    alignSelf: 'flex-start'
  },
  switchTextStyle:
  {
    color: "#365C80",
    position: 'relative',
    padding: 5,
    flexDirection: 'row',
  },
};
