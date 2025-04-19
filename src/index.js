import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './pages/index';
import './styles/variables.css';
import './styles/global.css';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your user ID (public key)
emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);