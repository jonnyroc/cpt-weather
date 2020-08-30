import React, { Component } from 'react';
import { connect } from "react-redux";
import { getWeatherData } from "../../actions";
import {FormatTimeWithZone, getDay} from "../../utils/TimeFormatter";
import TemperatureAtTime from "../TemperatureAtTime/TemperatureAtTime";

import './CurrentInfo.scss';


class CurrentInfo extends Component {

  today = new Date();
  currentDate= this.today.toDateString();
  currentTime = FormatTimeWithZone(this.today.getTime());

  render() {
    if (this.props.currentWeatherData) {

      const tempInCelcius = (this.props.currentWeatherData && this.props.currentWeatherData.current.temp - 273.15);
      const temp = (this.props.unit === 'C') ? Math.round(tempInCelcius) : Math.round(tempInCelcius * (9/5) + 32);
      // const test = getDay(this.props.currentWeatherData.daily[0].dt);
      return (
        <div className="col-md-3">
          <h1> Cape Town</h1>
          <p>{this.currentDate}   {this.currentTime}</p>
          <h3>{temp} &deg;{this.props.unit}</h3>
          { /*<button className="btn btn-primary" onClick={() => this.props.getWeatherData()}> Get Weather</button> */}
          { /*<TemperatureAtTime temp='283' time='9:40am' /> */}
        </div>
      );
    } else {
      return (
        <div >
          loading...
        </div>
      );;
    }
  }
}

const mapStateToProps = (state) => {
  return {
    currentWeatherData: state.weatherData.data,
    unit: state.unit
  }
}

export default connect(mapStateToProps, {
  getWeatherData
})(CurrentInfo);