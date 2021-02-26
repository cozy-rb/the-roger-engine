import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './app/index.css';
import App from './app/App';
import Auth0ProviderWithHistory from "./contexts/Auth0-Provider-with-history.js";
import 'rsuite/dist/styles/rsuite-default.css';

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <App />
    </Auth0ProviderWithHistory>
  </BrowserRouter>, document.getElementById('root'));
