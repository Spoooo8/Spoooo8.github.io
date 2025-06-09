import React from 'react';
import { Routes, Route } from 'react-router-dom';  // NO BrowserRouter here
import Home from './components/Home';
import Projects from './components/Projects';
import Certificates from './components/Certificates';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
    </Routes>
  );
}

export default App;
