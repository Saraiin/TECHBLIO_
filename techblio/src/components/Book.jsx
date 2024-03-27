import React, { useState } from 'react';
import { data } from '../data/data.js';
import { GrInstallOption } from "react-icons/gr";
//import { MdOutlineRemoveRedEye } from "react-icons/md";



const Book = () => {
  const [books, setBooks] = useState(data);

  //Filter by  html/css/react/tailwind ...
  const filterType = (category) => {
    setBooks(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  // Filter by books/roadmap/cheatsheet
  const filterGuide = (guide) => {
    setBooks(
      data.filter((item) => {
        return item.guide === guide;
      })
    );
  };

  //Open book in new tab (for the eye icon)
  /*const openBook = (url) => {
    window.open(url, '_blank');
  };*/

  //Open book in new tab (for download)
  const startDownload = (url) => {
    //  download by opening the URL in a new tab
    window.open(url, '_blank');
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12 dark:bg-[#121212]'>
      <h1 className='text-black-900 font-bold text-4xl text-center font-mono dark:text-gray-200 border rounded-md bg-[#c3195d] bg-opacity-70 mb-4'>
         Resources
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700 font-mono dark:text-gray-200'>Programming Languages - Framework</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setBooks(data)}
              className='m-1 border border-black rounded-md p-2  hover:border-pink  text-black-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              All
            </button>
            <button
              onClick={() => filterType('HTML/CSS')}
              className='m-1  border border-black rounded-md p-2 hover:border hover:border-pink text-black-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              HTML/CSS
            </button>
            <button
              onClick={() => filterType('SQL')}
              className='m-1  border border-black rounded-md p-2 hover:border hover:border-pink text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
             SQL
            </button>
            <button
              onClick={() => filterType('JAVASCRIPT')}
              className='m-1  border border-black rounded-md p-2 hover:border hover:border-pink text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              JAVASCRIPT
            </button>
            <button
              onClick={() => filterType('REACT')}
              className='m-1 border border-black rounded-md p-2 hover:border hover:border-pink  text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              REACT
            </button>
            <button
              onClick={() => filterType('TAILWIND')}
              className='m-1  border border-black rounded-md p-2 hover:border hover:border-pink text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              TAILWIND
            </button>
            <button
              onClick={() => filterType('PYTHON')}
              className='m-1  border border-black rounded-md p-2 hover:border hover:border-pink text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              PYTHON
            </button>
          </div>
        </div>

        {/* Filter Type of resources(ebook, roadmap or  cheatsheet) */}
        <div>
          <p className='font-bold text-gray-700 font-mono dark:text-gray-200'>Type of resources</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterGuide('Book')}
              className='m-1  border border-black rounded-md p-2 hover:border hover:border-pink text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              Book
            </button>
            <button
              onClick={() => filterGuide('RoadMap')}
              className='m-1 border border-black rounded-md p-2  hover:border-pink  text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200'
            >
              RoadMap
            </button>
            <button
              onClick={() => filterGuide('CheatSheet')}
              className='m-1 border border-black rounded-md p-2 hover:border hover:border-pink  text-oblack-600 font-mono hover:font-bold hover:text-[#f70776] hover:scale-105 duration-300 active:text-[#f70776] dark:text-gray-200 dark:border-gray-200 dark:hover:text-green'
            >
              CheatSheet
            </button>
          
          </div>
        </div>
      </div>

      {/* Display data: Books/RoadMaps/Cheatsheet */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {books.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg rounded-md hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold dark:text-gray-200'>{item.name}</p>
              <p>
                {/*<span className='bg-gray-700 text-white p-1 rounded-full'>
                    {item.guide}
                  </span>*/}
                <GrInstallOption  size={25} className='text-black hover:cursor-pointer hover:text-[#f70776] dark:text-gray-200' onClick={() => startDownload(item.url)}/>

              </p>
                
            </div>
            {/* icones 
            <div className='flex justify-between px-2 py-4'>
                  <GrInstallOption  size={25} className='text-black hover:cursor-pointer hover:text-blue-500' onClick={() => startDownload(item.url)}/>
                  <MdOutlineRemoveRedEye size={25} className='text-black hover:cursor-pointer hover:text-blue-500' onClick={() => openBook(item.url)}/>
             </div> */}
          </div>
        ))}
      </div>
    </div>
  );
 }
export default Book;
