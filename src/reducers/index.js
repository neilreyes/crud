import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import fetchPosts from './post';

export default combineReducers({
    posts: fetchPosts,
    firebase: firebaseReducer,
    firestore: firestoreReducer,
});