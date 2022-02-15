import React from 'react';
import ReactDOM from 'react-dom';

import { __dev__ } from 'utils';

import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('appRoot')
);

if (__dev__) {
  reportWebVitals(console.log);
}
