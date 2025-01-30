import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Navbar from './Components/Navbar';
import AppRoutes from './AppRoutes';

ReactDOM.render(
  <React.StrictMode>
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="container mx-auto py-6">
          <AppRoutes />
        </main>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();