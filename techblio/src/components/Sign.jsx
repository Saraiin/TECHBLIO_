import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsDash } from "react-icons/bs";

const Sign = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='flex flex-row justify-center items-center w-full  text-black dark:text-gray-200 dark:bg-[#121212] font-mono'> 
            <small >Made with</small> <IoMdHeartEmpty className=" text-[#c3195d] dark:text-gray-200"/> <small >by <a href="https://github.com/Saraiin"> Sara </a> - {year} </small>
        </div>
    );
    
};

export default Sign;
