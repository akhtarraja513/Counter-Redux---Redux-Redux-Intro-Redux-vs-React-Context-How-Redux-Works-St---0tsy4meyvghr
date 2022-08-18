import { createStore } from "redux";
import updateValueReducer from "./reducers";

export const store = createStore(updateValueReducer);