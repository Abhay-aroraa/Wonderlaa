import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RideProvider } from './context/RiderContext.jsx'; // ✅ path to your context file

createRoot(document.getElementById('root')).render(
  <RideProvider>
    <App />
  </RideProvider>
);
