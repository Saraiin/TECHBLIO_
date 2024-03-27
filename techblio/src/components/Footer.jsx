import React from 'react';
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#c3195d]'>TECHBLIO.</h1>
        <p className='py-4 text-[#121212]'>Start your journey into technology with our Tech e-library .</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} className='text-black   dark:text-white'/>
            <FaInstagram size={30} className='text-black  dark:text-white'/>
            <FaXTwitter  size={30} className='text-black  dark:text-white' />
            <FaGithubSquare size={30} className='text-black  dark:text-white'/>
            <MdOutlineEmail size={35} className='text-black  dark:text-white'/>
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6 font-mono'>
        <div>
          <h6 className='font-medium text-[#c3195d]'>Front-end</h6>
          <ul>
            <li className='py-2 text-sm text-[#121212]'>HTML-CSS</li>
            <li className='py-2 text-sm text-[#121212]'>Javascript</li>
            <li className='py-2 text-sm text-[#121212]'>React</li>
            <li className='py-2 text-sm text-[#121212]'>Tailwind</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-[#c3195d]'>Back-end</h6>
          <ul>
            <li className='py-2 text-sm text-[#121212]'>Python</li>
            <li className='py-2 text-sm text-[#121212]'>C</li>
            <li className='py-2 text-sm text-[#121212]'>API</li>
            <li className='py-2 text-sm text-[#121212]'>Node.js</li>
          </ul>
        </div>
      <div>
      <h6 className='font-medium text-[#c3195d]'>Company</h6>
        <ul>
            <li className='py-2 text-sm text-[#121212]'>About</li>
            <li className='py-2 text-sm text-[#121212]'>Blog</li>
            <li className='py-2 text-sm text-[#121212]'>Careers</li>
        </ul>
      </div>
    <div>
      <h6 className='font-medium text-[#c3195d]'>Ressources</h6>
      <ul>
            <li className='py-2 text-sm text-[#121212]'>e-books</li>
            <li className='py-2 text-sm text-[#121212]'>Roadmap</li>
            <li className='py-2 text-sm text-[#121212]'>Cheatsheet</li>
      </ul>
    </div>
    
    </div>
    
  </div>
  );
};

export default Footer;