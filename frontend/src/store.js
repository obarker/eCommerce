import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'
import Cookie from 'js-cookie'
import { cartReducer } from './reducer/cartReducers';
import { productDetailsReducer, productListReducer } from './reducer/productReducers';
import { userRegisterReducer, userSigninReducer } from './reducer/userReducers';

const cartItems = Cookie.getJSON("cartItems") || [];
const userInfo = Cookie.getJSON("userInfo") || null;


const initialState = { cart: {cartItems}, userSignin:{userInfo}};
const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer,
    userSignin: userSigninReducer,
    userRegister: userRegisterReducer
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, compose(applyMiddleware(thunk)));

export default store;