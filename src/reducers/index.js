import { combineReducers } from "redux";
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';
import transactionReducer from './reducer_transactions';

export default combineReducers({
    transactions: transactionReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer,
});