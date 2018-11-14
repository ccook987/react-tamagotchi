import React from 'react';
import PropTypes from 'prop-types';

function StatusBar(props){
  return (
    <div>
      <p>Food: {props.food}</p>
      <p>Sleep: {props.sleep}</p>
      <p>Play: {props.play}</p>
    </div>

  );
}


StatusBar.propTypes = {
  food: PropTypes.number.isRequired,
  sleep: PropTypes.number.isRequired,
  play: PropTypes.number.isRequired,
};

export default StatusBar;
