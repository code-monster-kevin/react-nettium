import React from 'react';
import '../general/w3.css';

const ShopBanner = props => {
  return (
    <div className="w3-display-container w3-container">
      <img src={props.bannerImage} alt={props.title} style={{ width: '100%' }} />
      <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
        <h1 className="w3-jumbo w3-hide-small">{props.title}</h1>
        <h1 className="w3-hide-large w3-hide-medium">{props.title}</h1>
        <h1 className="w3-hide-small">{props.subtitle}</h1>
      </div>
    </div>
  );
};

export default ShopBanner;
