import {createStore,combineReducers,applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension"
import listProductsReducer from "./Redux/reducers/ListProductsReducers"
import productReducer from "./Redux/reducers/ProductReducers"

const reducer= combineReducers({
  productList: listProductsReducer,
  fullProductDetails: productReducer,
})

const initialState = {}

const middleware = [thunk]
const store=createStore(reducer,initialState,composeWithDevTools(
  applyMiddleware(...middleware)
))

export default store