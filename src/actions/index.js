import { FETCH_POSTS, ADD_POST } from '../actions/actionTypes';

export const fetchPosts = () => dispatch =>{
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
}

export const addPost = post => dispatch => {
    console.log("from addpost action:",post);
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
        .then(post => dispatch({
            type: ADD_POST,
            payload: post
        }));
}