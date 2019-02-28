import { FETCH_POSTS, ADD_POST } from '../actions/actionTypes';

const initialState = {
    items: [],
    item: {}
};

export default (state = initialState, action) => {
    const { payload, type } = action;

    switch ( type ) {
        case ADD_POST:
            return {
                ...state,
                item: payload
            };
        case FETCH_POSTS:
            return Object.assign({}, state, {items: payload});
        default:
            return state;
    }
}
