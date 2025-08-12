import {useDispatch} from "react-redux";
import {fetchRequest} from "../actions/fetchRequest.js";

const Form = () => {
    const dispatch = useDispatch();
    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        if (city) {
            dispatch(fetchRequest(city));
        }
    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder='City name'/>
            <button type={"submit"}>Get Weather</button>
        </form>
    );
};

export default Form;