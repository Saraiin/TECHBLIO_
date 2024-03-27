import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dark, setDark] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  //function to handle dark mode
/*  const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }; */

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4  '>
      <h1 className='w-full text-3xl font-bold [#121212]'><Link to="/">TECHBLIO.</Link></h1>
      <ul className='hidden md:flex'>
        <li className='p-4 font-bold font-mono text-[#121212]'><Link to="/">Home</Link></li>
        <li className='p-4 font-bold font-mono text-[#121212]'><Link to="/resources">Resources</Link></li>
        <li className='p-4 font-bold font-mono text-[#121212]'><Link to="/about">About</Link></li>
        <li className='p-4 font-bold font-mono text-[#121212]'>Contact</li>
      </ul>
      {/* button to change mode (from light to dark) */}
       {/*<button onClick={()=> darkModeHandler()} className="pr-4">
                {
                    dark && <IoSunny />
                }
                {
                    !dark && <IoMoon />
                }
              </button>*/}
        <div onClick={handleNav} className='block md:hidden '>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>
        <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-[#121212] bg-[#000300] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
          <h1 className='w-full text-3xl font-bold text-[#c3195d] m-4  font-mono '>TECHBLIO.</h1>
          <li className='p-4 border-b border-[#c3195d] font-bold font-mono text-gray-200'><Link to="/Home">Home</Link></li>
          <li className='p-4 border-b border-[#c3195d] font-bold font-mono text-gray-200'><Link to="/Resources">Resources</Link></li>
          <li className='p-4 border-b border-[#c3195d] font-bold font-mono text-gray-200'><Link to="/about">About</Link></li>
          <li className='p-4 font-bold font-mono text-gray-200'>Contact</li>
        </ul>
    </div>
  );
};

export default Navbar;
