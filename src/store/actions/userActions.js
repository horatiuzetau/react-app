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

