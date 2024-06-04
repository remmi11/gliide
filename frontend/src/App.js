import * as React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/home'
import SelectAnimation from './views/animation'
import "./styles/animation.css"

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/select-animation" element={<SelectAnimation />}></Route>
        </Routes>
      </Router>
    </div>
  );
}