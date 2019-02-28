import { FETCH_POSTS, ADD_POST } from '../actions/actionTypes';

export const getPosts = posts => ({ type: FETCH_POSTS, payload: posts });

export const fetchPosts = () => {
    return (dispatch, getState, {getFirestore, getFirebase}) => {
        const firestore = getFirestore();
        const posts = [];
        
        firestore
            .collection('transactions')
            .get()
            .then(querySnapshot=>{
                querySnapshot.forEach(doc=>{
                    posts.push(doc.data());
                })
            })
            .then(()=>dispatch(getPosts(posts)));
        

    }
}



export const addPost = post => {
    return (dispatch, getState, {getFirebase, getFirestore}) =>{
        const fireStore = getFirestore();

        console.log(fireStore.collection('transactions'));
        dispatch({
            type:ADD_POST,
            payload:post
        });
    }
}