import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import Results from './pages/Results.jsx';
import './fonts.css';


function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/results" element={<Results />}></Route>
        
        </Routes>
    </Router>
  );
}

export default App;