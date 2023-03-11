import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./authReducer/authReducer";
import thunk from "redux-thunk";

const allReducers = {
    authReducer,
}

const store = createStore(combineReducers(allReducers), applyMiddleware(thunk));


export default store;