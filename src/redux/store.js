import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import authReducer from "./authReducer/authReducer";
import thunk from "redux-thunk";
import procuctReducder from "./productsReducer/productReducer";
import cartReducer from "./cartReducer/cartReducer";
import { composeWithDevTools } from "redux-devtools-extension";

//redux-presist
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistConfig = {
    key: 'root',
    storage,
}


const allReducers = combineReducers({
    authReducer,
    procuctReducder,
    cartReducer,
})
const persistedReducer = persistReducer(persistConfig, allReducers)

export const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(thunk)));

export const persistor = persistStore(store);
