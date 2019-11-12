import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

var firebaseConfig = {
  apiKey: "AIzaSyBcg_uKN3Kpx2fGDi7GZk0e7JNGlFQUfnk",
  authDomain: "solidaryapp-4c045.firebaseapp.com",
  databaseURL: "https://solidaryapp-4c045.firebaseio.com",
  projectId: "solidaryapp-4c045",
  storageBucket: "solidaryapp-4c045.appspot.com",
  messagingSenderId: "1066728661924",
  appId: "1:1066728661924:web:4853ae2b7773e23a5d9731",
  measurementId: "G-9RE0TP9ET8"
};
firebase.initializeApp(firebaseConfig);

export default firebase;