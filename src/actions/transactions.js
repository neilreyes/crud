import { delay } from "q";

// Fetch
export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCESS";
export const FETCH_TRANSACTIONS_FAILURE = "FETCH_TRANSACTIONS_FAILURE";
export const FETCH_TRANSACTIONS_RESET = "FETCH_TRANSACTIONS_RESET";

// ADD
export const ADD_EXPENSE = "ADD_EXPENSE";
export const ADD_EXPENSE_SUCCESS = "ADD_EXPENSE_SUCCESS";
export const ADD_EXPENSE_FAILURE = "ADD_EXPENSE_FAILURE";
export const ADD_EXPENSE_RESET = "ADD_EXPENSE_RESET";

// DELETE
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export const fetchTransactions = () => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        const transactions = [];

        dispatch({ type: FETCH_TRANSACTIONS, payload: true });
        
        firestore
            .collection('transactions')
            .orderBy('date','desc')
            .get()
            .then((querySnapshot)=>{
                if( !querySnapshot.empty ){
                    querySnapshot.forEach(doc => {
                        transactions.push(doc.data());
                    })
                    dispatch({ type: FETCH_TRANSACTIONS_SUCCESS, payload: transactions });
                } else {
                    dispatch({ type: FETCH_TRANSACTIONS_FAILURE, payload: "No documents found" });
                }
            })
            .catch(error=>{console.error(error)});
    }
}

export const addExpense = newEntry => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        
        dispatch({type: ADD_EXPENSE, payload: true});
        
        firestore
            .collection('transactions')
            .add(newEntry)
            .then(docRef=>{
                dispatch({
                    type: ADD_EXPENSE_SUCCESS,
                    payload: newEntry,
                });
            })
            .catch(error=>{
                dispatch({
                    type: ADD_EXPENSE_FAILURE,
                    payload: error,
                });
            })
        
    }
}

export const deleteTransactionEntry = id =>{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();

        console.log(id);
    }
}

/* export default function fetchTransactionCats(){
    return (dispatch, getState, {getFirestore, getFirebase}) =>{
        const firestore = getFirestore();
        const fetchedCategories = [];

        firestore
            .collection('categories')
            .get()
            .then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    fetchedCategories.push(doc.data());
                })
            })
            .then(()=>dispatch({
                type: FETCH_TRANSACTION_CATEGORIES,
                payload: fetchedCategories,
            }));
    }
} */