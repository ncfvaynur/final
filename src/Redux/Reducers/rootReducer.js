import { combineReducers } from "redux";
import { getHomeProductReducer, getProductItemReducer } from "./productReducer";
import { CartReducer } from "./cartReducer";
import { getChefReducer, getCheftItemReducer } from "./chefReducer";


export const rootReducer = combineReducers({
  homeProducts: getHomeProductReducer,
  cartItems: CartReducer,
  productItem: getProductItemReducer,
  chefItem: getChefReducer,
  chef:getCheftItemReducer
})