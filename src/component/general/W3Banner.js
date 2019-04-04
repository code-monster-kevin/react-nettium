import React from 'react';
import './w3.css';

const W3Banner = props => {
  return (
    <div className="w3-section w3-bottombar">
      <div className="w3-content w3-display-container">
        <img alt={props.alt} src={props.image} style={{ width: '100%' }} />
        <div className="w3-display-bottomleft w3-container w3-padding-16 w3-black">
          {props.caption}
        </div>
      </div>
    </div>
  );
};

export default W3Banner;
