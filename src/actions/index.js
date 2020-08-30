import weatherData from "../utils/api/index";
import { actionTypes } from "./actionTypes";


export const getWeatherData = () => {
    return async (dispatch) => {
        const data = await weatherData.get();

        dispatch({
            type: actionTypes.DATA_FETCHED,
            payload: data
        })
    };
};

export const updateUnit = (unit) => {
    return {
        type: actionTypes.UNIT_UPDATED,
        payload: unit
    }
}