import React from 'react';
import './w3.css';

const W3NavItem = props => {
  return (
    <a href={props.link} className="w3-bar-item w3-button">
      {props.description}
    </a>
  );
};

export default W3NavItem;
