import React from 'react';
import '../general/w3.css';

const ShopHeader = props => {
  return (
    <header className="w3-container w3-xlarge">
      <p className="w3-left">{props.title}</p>
    </header>
  );
};

export default ShopHeader;
