import React from 'react';
import useSelect from '../../apiHooks/useSelect';
import DataCards from '../DataCards';

export default function Event() {
  const { data: needed_data, error, loading } = useSelect('events');
  if (loading) return loading;
  if (error) throw error;
  return (
    <div>
      <h1 className='text-5xl text-center p-3 my-5'>Events</h1>
      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-y-6 gap-x-14'>
        {needed_data.data.length > 0 &&
          needed_data.data.map((item) => {
            let nameExists = item.name.en && item.name.fi ? true : false;
            if (nameExists === false) return <></>;
            else {
              return (
                <DataCards
                  key={item.id}
                  name={item.name.en}
                  url={item.info_url}
                  location={item.location.address.street_address}
                  city={item.location.address.locality}
                  images={item.description.images[0]?.url}
                />
              );
            }
          })}
      </div>
    </div>
  );
}
