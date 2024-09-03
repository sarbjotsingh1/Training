import { createStore } from "redux";
import { RootReducer } from "./RootReducer";
//global store
const store = createStore(RootReducer);

export default store;
