import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);