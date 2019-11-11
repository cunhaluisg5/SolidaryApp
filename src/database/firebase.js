import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyASYCAcpMSBEUt_5CKg0qRj2llH5LRaiuk",
    authDomain: "cadastro-6cf90.firebaseapp.com",
    databaseURL: "https://cadastro-6cf90.firebaseio.com",
    projectId: "cadastro-6cf90",
    storageBucket: "cadastro-6cf90.appspot.com",
    messagingSenderId: "542064520936",
    appId: "1:542064520936:web:5513be07877e31bd51a35d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;