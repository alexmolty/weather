import {api_key, base_url} from "../utils/constants.js";
import {setWeather} from "./weatherActions.js";

export const FETCH_REQUEST = "FETCH_REQUEST";

export const fetchRequest = (city) => {
    return dispatch => {
        if (city) {
            fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
                .then(res => res.json())
                .then(data => {
                    dispatch(setWeather({
                        country: data.sys.country,
                        city: data.name,
                        temp: data.main.temp,
                        pressure: data.main.pressure,
                        sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                    }));
                })
                .catch(e => {
                    console.log(e)
                    dispatch(setWeather(null))
                });
        }
    }
}

