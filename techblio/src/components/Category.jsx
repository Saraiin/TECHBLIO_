import React from 'react';
import { categories } from '../data/data.js';

const Category = () => {
  //change it to websites for practicing 
  console.log(categories);
  const openLink = (url) => {
    window.open(url, '_blank');
  };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 '>
      <h1 className='text-black-600 font-bold text-4xl text-center font-mono'>
        Practice
      </h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((item, index) => (
          <div
            key={index}
            className='bg-gray-100 rounded-lg p-4 flex justify-between items-center hover:scale-105 duration-300 cursor-pointer  hover:text-[#c3195d] focus:text-[#f70776]'
            onClick={() => openLink(item.url)}
          >
            <h2 className='font-bold sm:text-xl'>{item.name}</h2>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;