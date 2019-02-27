import firebase from 'firebase/app';
import firebaseAPI from './firebaseconfig'; // get api from firebase console
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
firebase.initializeApp(firebaseAPI);

// Init Firestore
firebase.firestore();

export default firebase;