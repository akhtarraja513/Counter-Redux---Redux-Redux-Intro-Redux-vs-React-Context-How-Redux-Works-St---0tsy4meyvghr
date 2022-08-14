import { createStore } from "redux";
import updateValueReducer from "./reducers";

export const rootReducer = createStore(updateValueReducer);