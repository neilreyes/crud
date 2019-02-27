import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/';
import { reactReduxFirebase } from 'react-redux-firebase';
import firebase from 'firebase';
import firebaseAPI from './firebaseconfig'; // get api from firebase console

const firebaseConfigAPI = firebaseAPI;

// Initialize Firebase
firebase.initializeApp(firebaseConfigAPI);

const firebaseConfig = {
    userProfile: 'users',
    enableLoggin: true
}

const middleware = [thunk];

export default createStore(
    rootReducer,
    compose(
        reactReduxFirebase(firebase, firebaseConfig),
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);