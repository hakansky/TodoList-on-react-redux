import {createStore} from "redux";
import TODOReducer from "./TODOReducer";

let store = createStore(TODOReducer);

export default store;