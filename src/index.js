import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import MyComponent from './MyComponent.js';

const root = ReactDOM.createRoot(document.querySelector('div#subh'));
root.render(
  <React.StrictMode>
    <App />
      <MyComponent/> {/* the name of the function and file name should be same  */}
  </React.StrictMode>
);