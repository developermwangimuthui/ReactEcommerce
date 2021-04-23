import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyB9DJ47MmPQHsPvIUY7ZdkBLJupbiPeOVE",
    authDomain: "supermarketapplication-89999.firebaseapp.com",
    databaseURL: "https://supermarketapplication-89999-default-rtdb.firebaseio.com",
    projectId: "supermarketapplication-89999",
    storageBucket: "supermarketapplication-89999.appspot.com",
    messagingSenderId: "450047583828",
    appId: "1:450047583828:web:4ac215d89e970540572fc1",
    measurementId: "G-Y5EW4MTMTW"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }