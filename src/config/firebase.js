import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBWo_wFQWDwaIgE97sqtRp7tI9kGDOXtUU",
    authDomain: "hotweb-app.firebaseapp.com",
    projectId: "hotweb-app",
    storageBucket: "hotweb-app.appspot.com",
    messagingSenderId: "1089671394057",
    appId: "1:1089671394057:web:c07d00a4b4882bde46d9d8"
  };
const app = firebase.initializeApp(firebaseConfig)
const firestore  = app.firestore()

export default firestore;
export { firebase }