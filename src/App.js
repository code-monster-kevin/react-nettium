import React, { Component } from 'react';
import logo from './assets/react.jpg';
import './component/general/w3.css';

class App extends Component {
  render() {
    return (
      <div className="w3-container w3-center">
        <h2>React JS Training</h2>
        <img src={logo} alt="React Logo" style={{ width: '80%', MaxWidth: '320px' }} />
        <p>Helps you get started quickly on ReactJS projects used in Nettium.</p>
      </div>
    );
  }
}

export default App;
