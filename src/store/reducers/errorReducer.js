import {
    CHANGE_ERROR,
    CLEAR_ERROR,
} from '../actions/errorActions';

const initState = {
    error: null,
}

const errorReducer = (state = initState, action) => {
    switch(action.type){
        case CHANGE_ERROR:
            return {
                ...state, 
                error: action.payload,
            }
        case CLEAR_ERROR:
            return {
                ...state,
                error: null,
            }
        default:
            return state;
    }
}

export default errorReducer;