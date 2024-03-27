import React from 'react';

//component for news letter
const News = () => {
  return (
    <div className='w-full py-16 text-gray-200 px-4 '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold font-mono py-2 text-[#121212]'>
          Looking to boost your career with better tech skills?
          </h1>
          <p className="font-mono text-[#121212]">Subscribe to our newsletter for the latest updates.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black border border-[#c3195d]'
              type='email'
              placeholder='Enter Email'
            />
            <button className='bg-[#c3195d] bg-opacity-70 text-[#121212] font-mono rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
          </div>   
        </div>
      </div>
    </div>
  );
};

export default News;
