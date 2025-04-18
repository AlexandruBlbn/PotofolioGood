import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/index';
import './styles/variables.css';
import './styles/global.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);