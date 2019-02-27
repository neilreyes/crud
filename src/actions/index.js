import { FETCH_POSTS } from '../actions/actionTypes';

export const fetchPosts = () => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const addPost = post => (dispatch, {getFirebase, getFirestore}) => {
    const firestore = getFirebase();

    console.log(firestore);
}