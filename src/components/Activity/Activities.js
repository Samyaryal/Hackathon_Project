import React from 'react';
import useSelect from '../../apiHooks/useSelect';
import DataCards from '../DataCards';

export default function Activities() {
  const { data: needed_data, error, loading } = useSelect('activities');
  if (loading) return loading;
  if (error) throw error;

// return (
//   <div>
//     {needed_data.data.length > 0 && (
//       needed_data.data.map((item) => (
//         <div>
//           <h1>{item.name.en}</h1>
//           <p> {item.location.address.street_address}</p>
//           <div className="Box">
//             {item.description.images && item.description.images[0] &&
//                 <img
//                   src={item.description.images[0].url}
//                   alt="pics"
//                   style={{ width: "270px", height: "270px" }}
//                 />
//              }
//           </div>
//         </div>
//       ))
//     )}
//   </div>
// );

  return (
    <div>
      <h1 className='text-5xl text-center p-3 my-5'>Activities</h1>
      <div className='max-w-7xl mx-auto grid grid-cols-3 gap-y-6 gap-x-14'>
        {needed_data.data.length > 0 &&
          needed_data.data.map((item) => (
            <DataCards
              key={item.id}
              name={item.name.en}
              url={item.info_url}
              location={item.location.address.street_address}
              city={item.location.address.locality}
              images={item.description.images[0]?.url}
            />
          ))}
      </div>
    </div>

  );
}


