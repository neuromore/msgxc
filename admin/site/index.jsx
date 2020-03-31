import React from 'reactn';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import GlobalContextProvider from "./utils/context"

import 'core-js';

import 'element-theme-default';

import './styles/base.scss';
import './styles/prism.css';

import App from './page';

import Cookies from 'js-cookie'

if (!Cookies.get(process.env.CLIENT_AUTH_COOKIE))  {
  window.location.replace(process.env.LOGIN_URL);
} else {
  render(<GlobalContextProvider><AppContainer><App /></AppContainer></GlobalContextProvider>, document.getElementById('app'));

  if (module.hot) {
    module.hot.accept('./page', () => {
      const App = require('./page').default;
  
      render(<GlobalContextProvider><AppContainer><App /></AppContainer></GlobalContextProvider>, document.getElementById('app'));
    });
  }  
}

