import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';

// Entrypoint: hydrate the React tree.  The BrowserRouter wraps
// the application to provide client‑side routing.  The basename
// matches the Vite `base` option for correct asset resolution.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter basename="/portfolio">
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
);