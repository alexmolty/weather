import {SET_MESSAGE, SET_WEATHER} from "../actions/weatherActions.js";

const initialState = {
    weather: {},
    message: "Enter city name"
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return {...state, weather: action.payload};
        case SET_MESSAGE:
            return {...state, message: action.payload};
        default:
            return state;
    }
}