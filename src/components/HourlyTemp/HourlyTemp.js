import React, { Component } from 'react';
import { connect } from "react-redux";
import { FormatTime } from "../../utils/TimeFormatter";
import TemperatureAtTime from "../TemperatureAtTime/TemperatureAtTime";

import './HourlyTemp.scss';

class HourlyTemp extends Component {

  renderHourlyTemp(hourData) {
    const time = FormatTime(hourData.dt)
    return <TemperatureAtTime key={hourData.dt} temp={hourData.temp} time={time} />
  }

  render() {
    if (this.props.hourlyData && this.props.hourlyData.hourly) {

      const hoursToShow = this.props.hourlyData.hourly.slice(1, 8);

      return (
        <span className="d-flex">
          {hoursToShow.map((data) => {
            return this.renderHourlyTemp(data);
          })}
        </span>
      );
    } else {
      return (
        <div >
          loading...
        </div>
      );
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    hourlyData: state.weatherData.data
  };
}
export default connect(mapStateToProps)(HourlyTemp);