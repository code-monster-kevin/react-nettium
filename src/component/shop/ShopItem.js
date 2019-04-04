import React from 'react';
import '../general/w3.css';

const ShopItem = props => {
  return (
    <div className="w3-col l3 s6">
      <div className="w3-container">
        <img src={props.image} alt={props.title} style={{ width: '100%' }} />
        <p>
          {props.title}
          <br />
          <b>{props.price}</b>
        </p>
      </div>
    </div>
  );
};

export default ShopItem;
