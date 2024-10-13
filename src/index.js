import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CombinedContext from './contexts/combinedContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
    <CombinedContext>
      <App />
    </CombinedContext>
  //</React.StrictMode>
);
