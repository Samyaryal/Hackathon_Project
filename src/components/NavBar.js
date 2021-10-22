import React from 'react';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
  const activeStyle = { color: '#F15B2A' };
  return (
    <nav className='m-3 static bg-transparent flex flex-row justify-start items-center text-gray-500 text-center'>
      <NavLink
        className='hover:text-black hover:bg-gray-500 hover:bg-opacity-25 transition duration-500 ease-in-out rounded-xl p-1 m-2 w-20'
        to='/'
        activeStyle={activeStyle}
        exact>
        Home
      </NavLink>
      <NavLink
        className='hover:text-black hover:bg-gray-500 hover:bg-opacity-25 transition duration-500 ease-in-out rounded-xl p-1 m-2 w-20'
        to='/activities'
        activeStyle={activeStyle}>
        Activities
      </NavLink>
      <NavLink
        className='hover:text-black hover:bg-gray-500 hover:bg-opacity-25 transition duration-500 ease-in-out rounded-xl p-1 m-2 w-20'
        to='/events'
        activeStyle={activeStyle}>
        Events
      </NavLink>
      <NavLink
        className='hover:text-black hover:bg-gray-500 hover:bg-opacity-25 transition duration-500 ease-in-out rounded-xl p-1 m-2 w-20'
        to='/places'
        activeStyle={activeStyle}>
        Place
      </NavLink>
    </nav>
  );
}
