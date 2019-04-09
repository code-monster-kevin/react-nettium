import React from 'react';
import './w3.css';

const W3Footer2 = props => {
  return (
    <div className="w3-black w3-center w3-row">
      <div className="w3-col s9">{props.description}</div>
      <div className="w3-col s3">
        <button className="w3-button w3-blue" onClick={() => props.changeLocale('en')}>
          English
        </button>
        <button className="w3-button w3-red" onClick={() => props.changeLocale('zh')}>
          中文
        </button>
      </div>
    </div>
  );
};

export default W3Footer2;
