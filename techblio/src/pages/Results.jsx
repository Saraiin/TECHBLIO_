import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navibar from '../components/Navibar'
import { GrInstallOption } from "react-icons/gr";

const Results = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchTerm)}');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setSearchResults(data.items || []); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dark:bg-[#121212]">
      <Navibar />
      <h1 className='text-black-900 font-bold text-4xl text-center font-mono dark:text-gray-200 border rounded-md bg-[#c3195d] bg-opacity-70 mb-4 dark:bg-[#121212]'>
        Search Results
      </h1>
      {/* display books */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4 dark:bg-[#121212]'>
        {searchResults.map(book => (
          <div
            key={book.id}
            className='border shadow-lg rounded-md hover:scale-105 duration-300'
          >
          {book.volumeInfo.imageLinks && (
            <img
                src={book.volumeInfo.imageLinks.thumbnail}
                alt={book.volumeInfo.title} 
                className='w-full max-w-[200px] h-auto object-cover rounded-t-lg'
            />
          )}
          <div className='flex justify-between px-2 py-4'>
            <p className='font-bold dark:text-gray-200'>{book.volumeInfo.title}</p>
            <p>
              <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer"> 
                <GrInstallOption  size={25} className='text-black hover:cursor-pointer hover:text-[#f70776] dark:text-gray-200 ' />
              </a>
            </p>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
