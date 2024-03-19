import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
} from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-black'>TECHBLIO.</h1>
        <p className='py-4'>Start your journey into technology with our Tech e-library .</p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} />
            <FaInstagram size={30} />
            <FaXTwitter  size={30} />
            <FaGithubSquare size={30} />
            <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
    <div>
        <h6 className='font-medium text-gray-400'>Front-end</h6>
        <ul>
            <li className='py-2 text-sm'>HTML-CSS</li>
            <li className='py-2 text-sm'>Javascript</li>
            <li className='py-2 text-sm'>React</li>
            <li className='py-2 text-sm'>Tailwind</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Back-end</h6>
        <ul>
            <li className='py-2 text-sm'>Python</li>
            <li className='py-2 text-sm'>C</li>
            <li className='py-2 text-sm'>API</li>
            <li className='py-2 text-sm'>Node.js</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Company</h6>
        <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Careers</li>
        </ul>
    </div>
    <div>
        <h6 className='font-medium text-gray-400'>Ressources</h6>
        <ul>
            <li className='py-2 text-sm'>e-books</li>
            <li className='py-2 text-sm'>Roadmap</li>
            <li className='py-2 text-sm'>Cheatsheet</li>
        </ul>
    </div>
      </div>
    </div>
  );
};

export default Footer;