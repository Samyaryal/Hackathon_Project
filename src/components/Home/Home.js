import React from 'react';
import useSelect from '../../apiHooks/useSelect';
import DataCards from '../DataCards';

export default function Home() {
  const { data: needed_data, error, loading } = useSelect('events');
  console.log('needed_data herererere', needed_data);
  // const three_data = needed_data.data.slice(50,52)
  // console.log("three_data",three_data)
  if (loading) return loading;
  if (error) throw error;

  return (
    <>
      <h1 className='text-5xl text-center p-3 my-5'>Upcoming Events</h1>
      <div className='max-w-7xl mx-auto grid grid-cols-2 gap-y-6 gap-x-14'>
        {needed_data.data.slice(0, 2).map((item) => {
          let nameExists = item.name.en && item.name.fi ? true : false;
          if (nameExists === false) return <></>;
          else {
            return (
              <div>
                <DataCards
                  key={item.id}
                  name={item.name.en}
                  url={item.info_url}
                  location={item.location.address.street_address}
                  city={item.location.address.locality}
                  images={item.description.images[0]?.url}
                />
              </div>
            );
          }
        })}
      </div>
    </>
  );
}
