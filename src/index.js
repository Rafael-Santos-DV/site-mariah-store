import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { StyleGlobal } from './components/style-initial';


ReactDOM.render(
  <React.StrictMode>
    <StyleGlobal />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);