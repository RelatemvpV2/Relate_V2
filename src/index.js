import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ReactDOM from 'react-dom/client';

import './index.css';

import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n/i18n"
<<<<<<< HEAD
import { AppProvider } from './contexts/AppContext';
=======
import { AppProvider } from './context/AppContext';
>>>>>>> 1f84ef9 (App context set up)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <AppProvider>
      <App />
      </AppProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


