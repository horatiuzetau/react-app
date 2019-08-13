export const CHANGE_ERROR = "CHANGE_ERROR";
export const CLEAR_ERROR = "CLEAR_ERROR";

export const changeError = (error) => ({
    type: CHANGE_ERROR,
    payload: error,
})

export const clearError = () => ({
    type: CLEAR_ERROR,
})