import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Browse from './components/Pages/Browse';
import New from "./components/Pages/New";
import TankBuilder from './components/Pages/TankBuilder';
import CompletedBuilds from './components/Pages/CompletedBuilds';
import Cart from './components/Pages/Cart';
import LogIn from './components/Pages/LogIn';
import CreateAccount from './components/Pages/CreateAccount'

const root = document.getElementById("root");

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/new" element={<New />} />
        <Route path="/tank-builder" element={<TankBuilder />} />
        <Route path="/completed-builds" element={<CompletedBuilds />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/log-in" element={<LogIn />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
