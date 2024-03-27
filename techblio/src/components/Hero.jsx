import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-black dark:text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#c3195d] font-mono font-bold p-2'>
          Tech E-Library
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-mono'>
          Your gateway to the world of technology.
        </h1>
        <div className='flex justify-center items-center text-mono'>
          <p className='md:text-3xl sm:text-2xl text-xl font-bold font-mono py-4'>
            Ressources, e-books, Roadmaps for
          </p>
          <ReactTyped
          className='md:text-3xl sm:text-2xl text-xl font-bold font-mono md:pl-4 pl-2 text-[#c3195d]'
            strings={['React', 'Javascript', 'Python', 'HTML', 'REACT']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        
        <Link to="/resources">
          <button className='bg-[#c3195d] bg-opacity-70 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black text-mono'>Get Started</button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;