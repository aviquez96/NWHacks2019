import * as Constants from "../Constants/firebase";
import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: Constants.API_KEY,
  authDomain: Constants.AUTH_DOMAIN,
  databaseURL: Constants.DATABASE_URL,
  projectId: Constants.PROJECT_ID,
  storageBucket: Constants.STORAGE_BUCKET,
  messagingSenderId: Constants.MESSAGING_SENDER_ID
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth;
  }

  // *** Auth API ***
  //   SignUp
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  //   SignIn
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  //   SignOut
  doSignOut = () => this.auth.signOut();

//   //TODO
//   //Reset Password
//   doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

//   //Update Password
//   doPasswordUpdate = password =>
//     this.auth.currentUser.updatePassword(password);
}

export default Firebase;
