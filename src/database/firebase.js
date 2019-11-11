import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBakqxDNA7-axrdhxvL8qGxe8fNkWCTwac",
    authDomain: "solidaryapp-eb90e.firebaseapp.com",
    databaseURL: "https://solidaryapp-eb90e.firebaseio.com",
    projectId: "solidaryapp-eb90e",
    storageBucket: "solidaryapp-eb90e.appspot.com",
    messagingSenderId: "947194087571",
    appId: "1:947194087571:web:c3fa8b7119e49848d26566",
    measurementId: "G-W5039FLLFC"
};
firebase.initializeApp(firebaseConfig);

export default firebase;