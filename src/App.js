import React, { useEffect } from 'react';
import CurrentInfo from './components/CurrentInfo/CurrentInfo';
import Filter from './components/Filter/Filter';
import HourlyTemp from './components/HourlyTemp/HourlyTemp';
import WeeklyTemp from './components/WeeklyTemp/WeeklyTemp';
import { getWeatherData } from "./actions";
import { connect } from "react-redux";

import './App.scss';


const App = (props) => {

  let interval = 0;
  useEffect(() => {
    props.getWeatherData();

    setInterval(() => {
      props.getWeatherData();
    }, 1200000);
  }, [props, interval]);


  return (

    <div className="container">
      <div className="row">
        <CurrentInfo />
      </div>
      <div className="row">
        <Filter />
      </div>
      <br />
      <br />
      <div>
        <HourlyTemp />
      </div>
      <br />
      <br />
      <div>
        <WeeklyTemp />
      </div>
    </div>
  );
}
const mapStateToProps = () => {
  return {};
}

export default connect(mapStateToProps, {
  getWeatherData
})(App);
