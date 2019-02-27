import { FETCH_DATA } from '../actions/actionTypes';

export const fetchData = data =>{
    return {
        type: FETCH_DATA,
        payload: {
            data
        }
    }
}