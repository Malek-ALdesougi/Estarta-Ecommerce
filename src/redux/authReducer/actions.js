import magic from "../../services/magic"
import * as AUTH_CONSTANTS from './constants'

export function HandleLogin(email) {

    return async (dispatch) => {

        dispatch({
            type: AUTH_CONSTANTS.LOADING_START
        })

        try {
            const response = await magic.auth.loginWithMagicLink({ email })
            const user = await magic.user.getMetadata();
            const Token = await magic.user.getIdToken();

            localStorage.setItem('user', JSON.stringify(user));
            localStorage.setItem('Token', Token);
            dispatch({
                type: AUTH_CONSTANTS.AUTH_SUCCESS,
                payload: { user, Token }
            })
            return true;

        } catch (error) {
            dispatch({
                type: AUTH_CONSTANTS.AUTH_ERROR,
                payload: error
            })
            return false;
        }
    }
}


export const logout = () => async (dispatch) => {

    dispatch({ type: AUTH_CONSTANTS.LOADING_START })

    try {
        await magic.user.logout();
        dispatch({ type: AUTH_CONSTANTS.LOGOUT_USER })
        localStorage.clear();

    } catch (error) {
        dispatch({
            type: AUTH_CONSTANTS.AUTH_ERROR,
            payload: error
        })
    }

}


export const checkAuthToken = () => async (dispatch) => {

    dispatch({
        type: AUTH_CONSTANTS.LOADING_START
    })

    try {
        const isLoggedIn = await magic.user.isLoggedIn();

        if (isLoggedIn) {
            console.log('authorized');
            dispatch({
                type: AUTH_CONSTANTS.LOADING_END
            })
        } else {
            console.log('NOT authorized');
            dispatch({
                type: AUTH_CONSTANTS.RESET_VALIDATE_ACTION,
            })
        }
    } catch (error) {
        console.log('you are not authorized');
        dispatch({
            type: AUTH_CONSTANTS.RESET_VALIDATE_ACTION,
        })
    }

}