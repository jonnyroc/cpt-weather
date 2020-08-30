import React, { Component } from 'react';
import { connect } from "react-redux";
import { getWeatherData } from "../../actions";
import { FormatTimeWithZone } from "../../utils/TimeFormatter";

import './CurrentInfo.scss';


class CurrentInfo extends Component {

  today = new Date();
  currentDate = this.today.toDateString();
  currentTime = FormatTimeWithZone(this.today.getTime());

  render() {
    if (this.props.currentWeatherData) {

      const tempInCelcius = (this.props.currentWeatherData && this.props.currentWeatherData.current.temp - 273.15);
      const temp = (this.props.unit === 'C') ? Math.round(tempInCelcius) : Math.round(tempInCelcius * (9 / 5) + 32);

      setTimeout(() => {
        if (tempInCelcius > 25) {
          alert("its too hot, turn on the Aircon!");
        } else if (tempInCelcius < 15) {
          alert("its too cold, turn on the heater!")
        }
      }, 1000);

      return (
        <div className="col-md-3">
          <h1> Cape Town</h1>
          <p>{this.currentDate}   {this.currentTime}</p>
          <h3>{temp} &deg;{this.props.unit}</h3>
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