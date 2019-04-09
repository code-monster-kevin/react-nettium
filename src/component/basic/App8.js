import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import W3Footer2 from '../general/W3Footer2';
import TopBar from '../pages/TopBar';
import AppRoutes2 from './AppRoutes2';
import { injectIntl, defineMessages } from 'react-intl';
import '../general/w3.css';

const messages = defineMessages({
  footer_desc: {
    id: 'app.footer.description',
    defaultMessage: 'ReactJS Training Demo'
  }
});

class App8 extends Component {
  render() {
    const {
      intl: { formatMessage }
    } = this.props;
    return (
      <div className="w3-light-grey w3-content">
        <TopBar />
        <BrowserRouter>
          <AppRoutes2 />
        </BrowserRouter>
        <W3Footer2
          description={formatMessage(messages.footer_desc)}
          changeLocale={this.props.changeLocale}
        />
      </div>
    );
  }
}

export default injectIntl(App8);
