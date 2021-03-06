import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bannerReducer from '../store/reducers/bannerReducer';
import balanceReducer from '../store/reducers/balanceReducer';
import auth from '../store/reducers/auth';
import App7 from './App7';

const reducer = combineReducers({
  banner: bannerReducer,
  auth: auth,
  balance: balanceReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

/*
  React Redux Example
*/
class AppRedux extends Component {
  render() {
    return (
      <Provider store={store}>
        <App7 />
      </Provider>
    );
  }
}

export default AppRedux;
