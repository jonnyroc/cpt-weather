import { combineReducers } from 'redux'
import getDataReducer from './getWeatherData'

export default combineReducers({
    weatherData: getDataReducer
});