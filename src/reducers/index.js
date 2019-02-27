import { combineReducers } from "redux";
import { FETCH_DATA } from '../actions/actionTypes';

const initialState = {
    data: "Hello world"
};

const fetchData = (state = initialState, action) =>{
    const { payload, type } = action;

    if( type=== FETCH_DATA ){
        return Object.assign({}, state, payload);
    }  

    return state;
}

export default combineReducers({
    fetchData
});