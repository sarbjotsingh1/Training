import { combineReducers } from "redux";
import { CounterReducer } from "./CounterReducer";
import { CartReducer } from "./CartReducer";

export const RootReducer = combineReducers({
  counter: CounterReducer,
  cart: CartReducer,
});
