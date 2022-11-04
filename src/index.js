import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from 'react-dom';
import { CbeContextProvider } from './context/CbeContext';

ReactDOM.render(
  <React.StrictMode>
    <CbeContextProvider>
    <App />
    </CbeContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
 );
 
