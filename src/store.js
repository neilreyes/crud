// Redux
import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
// Firebase
import { getFirebase } from 'react-redux-firebase';
import firebase from 'firebase/app';
// Firebase auth
import 'firebase/auth';
// Firebase Firestore
import 'firebase/firestore';
import { reduxFirestore, getFirestore } from 'redux-firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC6PgNxVmtcBbdFF4nO20K1hmDxwWFXdFk",
    authDomain: "budgetly-f22cc.firebaseapp.com",
    databaseURL: "https://budgetly-f22cc.firebaseio.com",
    projectId: "budgetly-f22cc",
    storageBucket: "budgetly-f22cc.appspot.com",
    messagingSenderId: "459098458006"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Init Firestore
firebase.firestore();

const middleware = [
    thunk.withExtraArgument({getFirebase, getFirestore})
];

export default createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
        reduxFirestore(firebase,firebaseConfig),
    )
);