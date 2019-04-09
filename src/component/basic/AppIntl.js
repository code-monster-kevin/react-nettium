import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import bannerReducer from '../store/reducers/bannerReducer';
import balanceReducer from '../store/reducers/balanceReducer';
import auth from '../store/reducers/auth';
import { IntlProvider, addLocaleData } from 'react-intl';
import zhLocaleData from 'react-intl/locale-data/zh';
import translations from '../../i18n/locales';
import App8 from './App8';

const reducer = combineReducers({
  banner: bannerReducer,
  auth: auth,
  balance: balanceReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

addLocaleData(zhLocaleData);

/*
  React International Example
*/
class AppRedux extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: localStorage.getItem('locale') || 'en'
    };
  }

  changeLocale = value => {
    this.setState({ locale: value });
    localStorage.setItem('locale', value);
  };

  render() {
    const { locale } = this.state;
    const messages = translations[locale];

    return (
      <Provider store={store}>
        <IntlProvider locale={locale} key={locale} messages={messages}>
          <App8 changeLocale={this.changeLocale} />
        </IntlProvider>
      </Provider>
    );
  }
}

export default AppRedux;
