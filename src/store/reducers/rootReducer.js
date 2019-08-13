import { combineReducers } from "redux";

import users from '../reducers/userReducer';
import error from '../reducers/errorReducer';

export default combineReducers({
    users,
    error,
})