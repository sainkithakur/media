import thunk from "redux-thunk";
import Reducer from "./reducers";
import { applyMiddleware, createStore } from "redux";

const Store = createStore(Reducer, applyMiddleware(thunk));

export default Store;
