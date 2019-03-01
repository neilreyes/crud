// Fetch
export const FETCH_TRANSACTIONS = "FETCH_TRANSACTIONS";
export const FETCH_TRANSACTIONS_SUCCESS = "FETCH_TRANSACTIONS_SUCESS";
export const FETCH_TRANSACTIONS_FAILURE = "FETCH_TRANSACTIONS_FAILURE";
export const FETCH_TRANSACTIONS_RESET = "FETCH_TRANSACTIONS_RESET";

// ADD
export const ADD_EXPENSE = "ADD_EXPENSE";

// DELETE
export const DELETE_TRANSACTION = "DELETE_TRANSACTION";

export const fetchTransactions = () => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        const transactions = [];

        dispatch({ type: FETCH_TRANSACTIONS, payload: true });
        
        firestore
            .collection('transactions')
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
            .catch(error=>{console.log(error)});

        console.log(transactions);
    }
}

export const addExpense = newEntry => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const firestore = getFirestore();
        
        firestore
            .collection('transactions')
            .add(newEntry)
            .then(docRef=>{
                dispatch({
                    type: ADD_EXPENSE,
                    payload: newEntry,
                });
                console.log("Transaction ID:", docRef);
            })
            .catch(err=>{
                console.error(err);
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