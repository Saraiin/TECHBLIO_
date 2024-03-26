import React from 'react';
import { IoMdHeartEmpty } from "react-icons/io";
import { BsDash } from "react-icons/bs";

const Sign = () => {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <div className='flex flex-row justify-center items-center w-full mb-8 text-black dark:text-pink font-bold'> 
            <small>Made with</small> <IoMdHeartEmpty className=" text-[#c3195d]"/> <small>by <a > Sara </a> - {year} </small>
        </div>
    );
    
};

export default Sign;
