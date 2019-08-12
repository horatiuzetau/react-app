// import Axios from 'axios';

// export function register(data) {
//     return dispatch => {
//         return Axios
//                 .post("http://localhost:8080/", data)
//                 .then(res => console.log(res))
//                 .catch(err => console.log(err));
//     }
// }


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

