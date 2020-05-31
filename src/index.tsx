import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { registerServiceWorker } from './serviceWorker.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
