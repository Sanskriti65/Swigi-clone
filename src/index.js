import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client'; // React 18's createRoot API
import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
