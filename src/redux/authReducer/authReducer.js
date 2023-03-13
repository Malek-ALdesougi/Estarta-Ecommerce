import * as AUTH_CONSTANTS from './constants'


const initState = {
    isAuth: !!localStorage.getItem('Token') || false,
    loading: false,
    user: JSON.parse(localStorage.getItem('user')),
    error: null
}

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case AUTH_CONSTANTS.LOGIN_START:
            return {
                ...state,
                loading: true
            }
        case AUTH_CONSTANTS.AUTH_SUCCESS:
            return {
                ...state,
                isAuth: action.payload.Token,
                loading: false,
                user: action.payload.user
            }

        case AUTH_CONSTANTS.AUTH_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state

    }

}

export default authReducer;