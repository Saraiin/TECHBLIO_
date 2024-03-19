import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';


function App() {
  return (
    <div className="bg-gray-50 dark:bg-gray-600">
      <Navbar />
      <Hero />
      <Footer />
      
    </div>
  );
}

export default App;