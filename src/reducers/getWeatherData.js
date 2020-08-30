import { actionTypes } from "../actions/actionTypes";

const defaultState = {
    weatherData: {},
    unit: 'C'
};

export default (state = defaultState, action) => {

    switch (action.type) {
        case actionTypes.DATA_FETCHED:
            return { ...state, weatherData: action.payload };
        case actionTypes.UNIT_UPDATED:
            return {...state, unit: action.payload}
        default:
            return state;
    }
}