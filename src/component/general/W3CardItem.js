import React from 'react';
import './w3.css';

const W3CardItem = props => {
  return (
    <div className="w3-third w3-container w3-margin-bottom">
      <img
        src={props.image}
        alt={props.alt}
        style={{ width: '100%' }}
        className="w3-hover-opacity"
      />
      <div className={props.isSelected ? 'w3-container w3-grey' : 'w3-container w3-white'}>
        <p>
          <b>{props.title}</b>
        </p>
        <p>{props.description}</p>
        {props.updateBanner && (
          <p>
            <button
              className="w3-button w3-white w3-border"
              onClick={() => props.updateBanner(props.id, props.image, props.alt)}
            >
              Open
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default W3CardItem;
