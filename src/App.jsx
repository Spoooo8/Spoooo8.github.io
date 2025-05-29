import React from 'react';
import { Routes, Route } from 'react-router-dom';  // NO BrowserRouter here
import Home from './components/Home';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/certificates" element={<Certificates />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
