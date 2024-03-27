import React from 'react';
import Laptop from '../assets/laptop.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='w-full bg-[#121212] py-16 px-4 '>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptopbooks' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#c3195d] font-bold font-mono md:text-4xl sm:text-3xl '>TECHBLIO.</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-mono text-[#c3195d]'>A library for technology </h1>
          <p className="font-mono text-gray-200">
          Welcome to our tech library! Here, you'll discover an array of resources, including dedicated materials for mastering programming languages. Take advantage of our collection to elevate your knowledge and proficiency in the tech domain.
          </p>
          <Link to="/resources">
            <button className='bg-[#c3195d] bg-opacity-70 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-mono'>Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;