import React from 'react';
import { connect } from "react-redux";

import './TemperatureAtTime.scss';

const TemperatureAtTime = (props) => {
    const tempInCelcius = props.temp - 273.15;
    const temp = (props.unit === 'C') ? Math.round(tempInCelcius) : Math.round(tempInCelcius * (9/5) + 32);

    return (
        <div style={{width: "100px"}} className="mr-3">
            <h5 className="card-title d-flex justify-content-center">{temp} &deg;{props.unit}</h5>
            <h6 className="card-subtitle d-flex justify-content-center mb-2 text-muted timeContainer">{props.time}</h6>
        </div>
    );
}

const mapStateToProps = (state, props) => {
    return {
        temp: props.temp,
        time: props.time,
        unit: state.unit
    }
}
export default connect(mapStateToProps)(TemperatureAtTime);