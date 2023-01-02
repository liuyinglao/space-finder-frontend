import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  /* React.StrictMode is a tool that highlights potential issues in a programme. 
  It works by encapsulating a portion of your full application as a component. 
  StrictMode does not render any visible elements in the DOM in development mode, but it enables checks and gives warnings. 
  StrictMode does not perform any checks or display any warnings in production mode.  */
  <React.StrictMode>
    {/* App, defined as a function in App.tsx can be called as component */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function passed in is calling with an Metric object: https://github.com/GoogleChrome/web-vitals/#metric
reportWebVitals(console.log);
