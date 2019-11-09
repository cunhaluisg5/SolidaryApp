import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBakqxDNA7-axrdhxvL8qGxe8fNkWCTwac",
    authDomain: "solidaryapp-eb90e.firebaseio.com",
    databaseURL: "https://solidaryapp-eb90e.firebaseio.com",
    projectId: "solidaryapp-eb90e",
    storageBucket: "",
    messagingSenderId: "947194087571"
};
firebase.initializeApp(config);

export default firebase;