import React from 'react';
import { connect } from "react-redux";
import { updateUnit } from "../../actions";

import './Filter.scss';

const Filter = (props) => {
  return (
    <div className="btn-group col-md-2" role="group" aria-label="Basic example">
      <button type="button"
        className={"btn btn-secondary" + (props.unit === 'C' ? " active" : '')}
        onClick={() => props.updateUnit('C')}>Celcius</button>
      <button type="button"
        className={"btn btn-secondary" + (props.unit === 'F' ? " active" : '')}
        onClick={() => props.updateUnit('F')}>Farenhiet</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    unit: state.unit
  }
}

export default connect(mapStateToProps, {
  updateUnit
})(Filter);