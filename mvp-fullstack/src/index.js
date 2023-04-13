
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <script>const whTooltips = {{"colorLinks": true, "iconizeLinks": true, "iconSize": true, "renameLinks": true, "dropchance": true}};</script> */}
    {/* <script src="https://wow.zamimg.com/js/tooltips.js"></script> */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

