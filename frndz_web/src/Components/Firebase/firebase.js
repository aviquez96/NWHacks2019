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
  
      this.auth = app.auth();
    }
  
    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }
  
  export default Firebase;