import React from 'react';
import App from './App';
import "./Styles/Estilos.css";

import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {reportWebVitals} from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
