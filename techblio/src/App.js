import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import Results from './pages/Results.jsx';
import About from './components/About.jsx'


function App() {
  return (
    <Router>
       <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/search" element={<Results />}></Route>
        <Route path="/about" element={<About />}></Route>

        
        </Routes>
    </Router>
  );
}

export default App;
