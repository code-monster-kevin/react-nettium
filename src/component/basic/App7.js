import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import W3Footer from '../general/W3Footer';
import TopBar from '../pages/TopBar';
import AppRoutes from './AppRoutes2';
import '../general/w3.css';

/*
  Reorganize all components
  introducing stores and redux
*/

class App7 extends Component {
  render() {
    return (
      <div className="w3-light-grey w3-content">
        <TopBar />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
        <W3Footer description="ReactJS Training Demo" />
      </div>
    );
  }
}

export default App7;
