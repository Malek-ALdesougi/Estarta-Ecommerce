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

            if (response) {
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('Token', Token);
                dispatch({
                    type: AUTH_CONSTANTS.AUTH_SUCCESS,
                    payload: { user, Token }
                })
            }
        } catch (error) {
            dispatch({
                type: AUTH_CONSTANTS.AUTH_ERROR,
                payload: error
            })
        }
    }
}


export const logout = () => (dispatch) => {

    dispatch({type: AUTH_CONSTANTS.LOADING_START})

    try {
        const resp = magic.user.logout();
        dispatch({type: AUTH_CONSTANTS.LOGOUT_USER})
        localStorage.clear();

    } catch (error) {
        dispatch({
            type: AUTH_CONSTANTS.AUTH_ERROR,
            payload: error
        })
    }

}