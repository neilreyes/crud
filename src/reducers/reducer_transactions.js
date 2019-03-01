import {
    FETCH_TRANSACTIONS,
    FETCH_TRANSACTIONS_SUCCESS,
    FETCH_TRANSACTIONS_FAILURE,
    FETCH_TRANSACTIONS_RESET,
    ADD_EXPENSE,
    ADD_EXPENSE_SUCCESS,
    ADD_EXPENSE_FAILURE,
    ADD_EXPENSE_RESET,
} from '../actions/transactions';

const INITIAL_STATE = {
    lists: {
        entries: [],
        error: null,
        loading: true,
    },
    newEntry: {
        entry: null,
        error: null,
        loading: false,
    },
    activeEntry: {
        entry: null,
        error: null,
        loading: false,
    },
    deleteEntry: {
        entry: null,
        error: null,
        loading: false
    }
};

export default (state = INITIAL_STATE, action) => {
    const { payload, type } = action;

    switch ( type ) {
        // Fetch transactions
        case FETCH_TRANSACTIONS:
            return Object.assign(
                {},
                state,
                {lists: { entries: [], error: null, loading: payload }}
            );
        case FETCH_TRANSACTIONS_SUCCESS:
            return Object.assign(
                {},
                state,
                { lists: { entries: payload, error: null, loading: false } }
            );
        case FETCH_TRANSACTIONS_FAILURE:
            return Object.assign(
                {},
                state,
                { lists: { entries: [], error: payload, loading: false } }
            );
        case FETCH_TRANSACTIONS_RESET:
            return Object.assign(
                {},
                state,
                { lists: { entries: [], error: payload, loading: false } }
            );

        // add expense
        case ADD_EXPENSE:
            return Object.assign({}, state,{
                newEntry: { entry: null, error: null, loading: true }
            });

        case ADD_EXPENSE_SUCCESS:
            return Object.assign({}, state, {
                newEntry: { entry: payload, error: null, loading: false }
            });

        case ADD_EXPENSE_FAILURE:
            return Object.assign({}, state, {
                newEntry: { entry: null, error: payload, loading: false }
            });

        case ADD_EXPENSE_RESET:
            return Object.assign({}, state, {
                newEntry: { entry: null, error: null, loading: false }
            });

        default:
            return state;
    }
}
