import {initialState} from "../configureStore/store.js";
import {SET_WEATHER} from "../actions/weatherActions.js";

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return { ...state, weather: action.payload };
        default:
            return state;
    }
};
