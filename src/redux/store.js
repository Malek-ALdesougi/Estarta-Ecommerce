import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./authReducer/authReducer";
import thunk from "redux-thunk";
import procuctReducder from "./productsReducer/productReducer";
import cartReducer from "./cartReducer/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = {
    authReducer,
    procuctReducder,
    cartReducer,
}

const store = createStore(combineReducers(allReducers),composeWithDevTools(applyMiddleware(thunk)));


export default store;