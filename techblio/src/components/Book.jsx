import React, { useState } from 'react';
import { data } from '../data/data.js';
import { GrInstallOption } from "react-icons/gr";
import { FaEye } from "react-icons/fa";


const Book = () => {
  //   console.log(data);
  const [books, setBooks] = useState(data);

  //   Filter Type html/css/react
  const filterType = (category) => {
    setBooks(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by guide e-books/roadmap/cheatsheet
  const filterGuide = (guide) => {
    setBooks(
      data.filter((item) => {
        return item.guide === guide;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>
        Tech Resources
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Languages</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setBooks(data)}
              className='m-1 border-black-600  text-black-600  hover:bg-orange-600 hover:text-white'
            >
              All
            </button>
            <button
              onClick={() => filterType('HTML/CSS')}
              className='m-1 border-blue-600 text-black-600  hover:bg-blue-600 hover:text-white'
            >
              HTML/CSS
            </button>
            <button
              onClick={() => filterType('SQL')}
              className='m-1 border-black-600  text-black-600  hover:bg-pink-600 hover:text-white'
            >
             SQL
            </button>
            <button
              onClick={() => filterType('JAVASCRIPT')}
              className='m-1 border-black-600  text-black-600  hover:bg-yellow-600 hover:text-white'
            >
              JAVASCRIPT
            </button>
            <button
              onClick={() => filterType('REACT')}
              className='m-1 border-black-600  text-black-600  hover:bg-blue-400 hover:text-white'
            >
              REACT
            </button>
            <button
              onClick={() => filterType('TAILWIND')}
              className='m-1 border-black-600  text-black-600  hover:bg-blue-800 hover:text-white'
            >
              TAILWIND
            </button>
            <button
              onClick={() => filterType('PYTHON')}
              className='m-1 border-black-600  text-black-600  hover:bg-green-600 hover:text-white'
            >
              PYTHON
            </button>
          </div>
        </div>

        {/* Filter guide */}
        <div>
          {/*<p className='font-bold text-gray-700'>Filter guide</p>*/}
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterGuide('e-Books')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              e-Books
            </button>
            <button
              onClick={() => filterGuide('RoadMap')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              RoadMap
            </button>
            <button
              onClick={() => filterGuide('CheatSheet')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              CheatSheet
            </button>
            <button
              onClick={() => filterGuide('Tutorial')}
              className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
            >
              Tutorial
            </button>
          </div>
        </div>
      </div>

      {/* Display Books */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {books.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-lg hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>{item.name}</p>
              <p>
                <span className='bg-orange-900 text-white p-1 rounded-full'>
                    {item.guide}
                </span>
              </p>
                
            </div>
            <div className='flex justfiy-between flex-end pl-2'>
                  <GrInstallOption  size={15} className='text-black'/>
                  <FaEye size={15} className='text-black'/>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
 }
export default Book;
