import React from 'react';
import { useState } from 'react';

export default function DataCards(data) {
  const { images, name, url, location, city, date } = data;
  const maps = `https://www.google.com/maps/place/${location}, ${city}`;
  let randNumInt = Math.floor(Math.random() * 10 + 1);
  let randNumGo = Math.floor(Math.random() * 10 + 1);
  let inum = randNumInt;
  let gnum = randNumGo;
  const [intNum, setInt] = useState(inum);
  const [goNum, setGo] = useState(gnum);
  const [voteInt, setVoteInt] = useState(false);
  const [voteGo, setVoteGo] = useState(false);
  let border1 = voteInt
    ? {
        borderColor: 'red',
        borderWidth: '3px',
      }
    : {};
  let border2 = voteGo
    ? {
        borderColor: 'red',
        borderWidth: '3px',
      }
    : {};
  const interested = () => {
    setVoteInt(!voteInt);
    inum += 1;
    setInt(inum);
  };

  const going = () => {
    setVoteGo(!voteGo);
    gnum += 1;
    setGo(gnum);
  };

  // console.log('images', images);
  return (
    <div className='rounded-2xl overflow-hidden shadow-lg'>
      <div className='flex flex-col justify-between h-full'>
        <img className='w-full self-stretch' alt={name} src={images} />
        <div className='flex flex-col justify-start px-4'>
          <h1 className='self-center text-4xl text-center'>{name}</h1>
          <h1 className='self-center text-xl'>{date}</h1>
          <a
            className='text-l self-center text-center text-gray-400 hover:text-gray-800 transition-colors duration-200'
            href={maps}>
            {city}, {location}
          </a>
        </div>

        <a
          className='self-center text-xl  hover:text-black hover:bg-gray-500 hover:bg-opacity-25 transition duration-500 ease-in-out rounded-xl p-3 my-4'
          href={url}>
          Website
        </a>
        <div className='flex flex-row justify-evenly h- pb-10'>
          <button
            style={border1}
            className='bg-green-100 mx-auto rounded p-1 w-32'
            onClick={interested}>
            interested {intNum}
          </button>
          <button
            style={border2}
            className='bg-green-300 mx-auto rounded  p-1 w-32'
            onClick={going}>
            going {goNum}
          </button>
        </div>
      </div>
    </div>
  );
}
