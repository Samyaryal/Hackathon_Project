import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-white w-full py-8'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <ul className='max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between'>
          <li className='my-2'>
            <p className='text-gray-400 hover:text-gray-800  transition-colors duration-200'>
              FAQ
            </p>
          </li>
          <li className='my-2'>
            <p className='text-gray-400 hover:text-gray-800 transition-colors duration-200'>
              Configuration
            </p>
          </li>
          <li className='my-2'>
            <p className='text-gray-400 hover:text-gray-800  transition-colors duration-200'>
              Github
            </p>
          </li>
          <li className='my-2'>
            <p className='text-gray-400 hover:text-gray-800  transition-colors duration-200'>
              LinkedIn
            </p>
          </li>
        </ul>
      </div>
    </footer>
  );
}
