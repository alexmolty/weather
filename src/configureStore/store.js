import {applyMiddleware, createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer.js";
import {thunk} from "redux-thunk";

export const store = createStore(weatherReducer, applyMiddleware(thunk));
