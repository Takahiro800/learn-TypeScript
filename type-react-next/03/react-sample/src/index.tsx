import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Hello from './components/Hello';
import { UseCallbackSample } from './components/UseCallbackSample';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <UseCallbackSample /> */}
    {/* <UseMemoSample /> */}
    <Clock />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
