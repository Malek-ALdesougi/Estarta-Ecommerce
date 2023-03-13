import * as AUTH_CONSTANTS from './constants'


const initState = {
    isAuth: !!localStorage.getItem('Token') || false,
    loading: false,
    user: JSON.parse(localStorage.getItem('user')),
    error: null
}

const authReducer = (state = initState, action) => {

    switch (action.type) {

        case AUTH_CONSTANTS.LOADING_START:
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

        case AUTH_CONSTANTS.LOGOUT_USER:
            return {
                isAuth: false,
                loading: false,
                user: {},
                error: null
            }
        case AUTH_CONSTANTS.RESET_VALIDATE_ACTION:
            return {
                ...state,
                loading: false,
                isAuth: false,
            }
        default:
            return state

    }

}

export default authReducer;