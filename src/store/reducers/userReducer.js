import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USERS_LOADING,
} from '../actions/userActions';

const initState = {
    list: [],
    error: null,
    loading: false,
}

export default (state = initState, action) => {
    switch(action.type){
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: action.payload,
                loading: false,
                error: null,
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                loading: false,
                users: [],
                error: action.payload,
            }
        case FETCH_USERS_LOADING:
            return {
                ...state,
                loading: true,
                error: null,
            }
        default:
            return state;
    }
}
