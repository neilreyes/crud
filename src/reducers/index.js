import { combineReducers } from "redux";
import fetchPosts from './post';

export default combineReducers({
    posts: fetchPosts
});