import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import MyInfo from './MyInfo';
import Directory from './Directory';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myinfo" element={<MyInfo />} />
        <Route path="/directory" element={<Directory />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
