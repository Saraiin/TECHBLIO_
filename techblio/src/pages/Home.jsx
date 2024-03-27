import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Sign from '../components/Sign';
import News from '../components/News';
import About from '../components/About';


const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <News />
      <Footer />
      <Sign />
    </div>
  );
};

export default Home;