import React, { Component } from 'react';
import { connect } from "react-redux";
import { getDay } from "../../utils/TimeFormatter";
import TemperatureAtTime from "../TemperatureAtTime/TemperatureAtTime";


class WeeklyTemp extends Component {

  renderWeeklyTemp(hourData) {
    const time = getDay(hourData.dt)
    return <TemperatureAtTime key={hourData.dt} temp={hourData.temp.day} time={time} />
  }

  render() {
    if (this.props.WeekData && this.props.WeekData.daily) {

      const hoursToShow = this.props.WeekData.daily.slice(0, 7);

      return (
        <span className="d-flex">
          {hoursToShow.map((data) => {
            return this.renderWeeklyTemp(data);
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

const mapStateToProps = (state) => {
  return {
    WeekData: state.weatherData.data
  };
}

export default connect(mapStateToProps)(WeeklyTemp);