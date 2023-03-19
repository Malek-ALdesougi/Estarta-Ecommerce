
import * as PRODUCTS_CONSTATNT from './constants'


export const fetchProducts = () => (dispatch) =>{

    dispatch({
        type: PRODUCTS_CONSTATNT.FETCH_START
    })

    try {
        fetch('https://run.mocky.io/v3/ebee18cb-838a-440f-bf61-e406587748a2')
        .then((response) => response.json())
        .then(products => dispatch({
            type: PRODUCTS_CONSTATNT.FETCH_PRODUCTS_SUCCESS,
            payload: products
        }))
        
    } catch (error) {
        dispatch({
            type:PRODUCTS_CONSTATNT.FETCH_PRODUCTS_ERROR,
        })
    }

}