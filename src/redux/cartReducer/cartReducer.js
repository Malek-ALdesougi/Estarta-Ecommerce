import * as CART_CONSTANTS from './constants'

const initialState = {
    cartProducts: [],
}



function cartReducer(state = initialState, action) {

    switch (action.type) {
        case CART_CONSTANTS.ADD_TO_CART:
            const isExist = state.cartProducts.find(element => element.id == action.payload.id)

            if (isExist) {
                const currentObjIndex = state.cartProducts.findIndex(obj => obj.id == action.payload.id);
                state.cartProducts[currentObjIndex].quantity += 1;

                return { cartProducts: state.cartProducts }
            } else {
                const modifiedCartItem = { ...action.payload, quantity: 1 };
                return { cartProducts: [...state.cartProducts, modifiedCartItem] }
            }

        case CART_CONSTANTS.REMOVE_FROM_CART:
            const currentItem = state.cartProducts.find(element => element.id == action.payload.id);
            if (currentItem) {
                if (currentItem.quantity > 1) {
                    const currentObjIndex = state.cartProducts.findIndex(obj => obj.id == action.payload.id);
                    state.cartProducts[currentObjIndex].quantity -= 1;
                    return { cartProducts: state.cartProducts }
                } else {
                    const filteredArray = state.cartProducts.filter((item) => item.id != currentItem.id);
                    return { cartProducts: filteredArray }
                }
            }
        default:
            return state
    }
}

export default cartReducer;