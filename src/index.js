import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/styles.css';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from './styles/global';
import { AuthProvider } from './contexts/auth';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <React.StrictMode>
      <BrowserRouter>
         <AuthProvider>
            <GlobalStyle />
            <App />
         </AuthProvider>
      </BrowserRouter>
   </React.StrictMode>
);
