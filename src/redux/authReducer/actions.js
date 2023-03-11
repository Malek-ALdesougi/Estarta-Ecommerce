import magic from "../../services/magic"
import * as AUTH_CONSTANTS from './constants'
import jwt_decode from 'jwt-decode';


export function HandleLogin(email) {

    return async (dispatch) => {

        dispatch({
            type: AUTH_CONSTANTS.LOGIN_START
        })

        try {
            const response = await magic.auth.loginWithMagicLink({email})
            const Token = await magic.user.getIdToken();


            if (response) {
                localStorage.setItem('user', response);
                localStorage.setItem('Token', JSON.stringify(Token));
                dispatch({
                    type: AUTH_CONSTANTS.AUTH_SUCCESS,
                    payload: response
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