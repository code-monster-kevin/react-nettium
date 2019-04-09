import React from 'react';
import W3Login from './W3Login';
import './w3.css';

const W3TopBar = props => {
  return (
    <div className="w3-container w3-row w3-black">
      <div className="w3-col s7">
        <div className="w3-bar w3-black">{props.children}</div>
      </div>
      <div className="w3-col s5">
        <W3Login />
      </div>
    </div>
  );
};

export default W3TopBar;
