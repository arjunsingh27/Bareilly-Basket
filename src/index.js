import React from 'react';
import { createRoot } from 'react-dom/client';
import App from "./App.js";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import "./index.css";

const root = createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
    
      <App />
 
  </BrowserRouter>
);
