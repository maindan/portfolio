import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './style.css'

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Header from './components/Header';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={Home}/>
        <Route path="/About" element={About}/>
        <Route path="/Contact" element={Contact}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

