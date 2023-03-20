import * as CART_CONSTANTS from './constants'


export const addToCart = (item) => (dispatch)  => {

    dispatch({
        type: CART_CONSTANTS.ADD_TO_CART,
        payload: item
    })
}


export const removeFromCart = (item) => (dispatch)  => {

    dispatch({
        type:CART_CONSTANTS.REMOVE_FROM_CART,
        payload: item
    })
}