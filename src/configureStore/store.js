import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import {logger} from "redux-logger/src";
import {weatherReducer} from "../reducers/weatherReducer.js";

export const initialState = {
    weather: null,
    message: "Enter city name"
}

export const store = createStore(weatherReducer, initialState, applyMiddleware(thunk, logger));