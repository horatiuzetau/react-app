import Axios from "axios";
// Pot sa pun eroarea aici atunci cand este cazul
// import {changeError, clearError} from './errorActions';

export const dropByUsername = (username) => dispatch => {

    console.log("Deleting");    
    Axios
        .delete("http://localhost:8080/api/users/" + username)
        .then(res => dispatch(fetch()))
        // Daca eroarea este not found pentru username-ul respectiv,
        // dam iar fetch ca poate a sters altcineva userul
        .catch(err => console.log("Deleting error", err), dispatch(fetch()));
}


export const register = (data) => dispatch => {

    // Asa putem sa ne ocupam de rezulat in interiorul componentelor
    console.log("Registering");    
    return Axios
        .post("http://localhost:8080/api/users", data)
        .then(dispatch(fetch()))
        // .catch(err => console.log("Registering error", err));
}

export const fetch = () => dispatch => {

    console.log("Fetching");
    dispatch(fetchUsersLoading());
    Axios
        .get("http://localhost:8080/api/users")
        .then(res => dispatch(fetchUsersSuccess(res.data)))
        .catch(err => dispatch(fetchUsersFailure(err)));
}

// FETCHING ACTIONS AND ACTION CREATORS

export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const FETCH_USERS_LOADING = "FETCH_USERS_LOADING";


export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users,
})

export const fetchUsersFailure= err => ({
    type: FETCH_USERS_FAILURE,
    payload: err,
})

export const fetchUsersLoading = () => ({
    type: FETCH_USERS_LOADING,
})

