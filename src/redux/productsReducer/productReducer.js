import * as PRODUCTS_CONSTANTS from './constants'


const initState = {
    products: [],
    loading: false,
    error: null
}

const procuctReducder = (state = initState, action) => {

    switch (action.type) {

        case PRODUCTS_CONSTANTS.FETCH_START:
            return {
                ...state,
                loading: true
            }

        case PRODUCTS_CONSTANTS.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                products: action.payload,
                loading: false,
            }

        case PRODUCTS_CONSTANTS.FETCH_PRODUCTS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        
        default:
            return state

    }

}

export default procuctReducder;