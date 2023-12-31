import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Threecards = () => {
  const [allCollages, setAllCollages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch(`https://collagely-server.vercel.app/collages`)
      .then((response) => response.json())
      .then((data) => {
        console.log({ data });
        setAllCollages(data);
      })
      .catch((error) => console.log(`Error fetching data: ${error}`));
  }, []);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCollages = allCollages.filter((collage) =>
    collage.college_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <h1 className='text-sky-500 text-center font-bold text-3xl mt-3 mb-3'>Popular College</h1>
      <div className='mb-3 text-center'>
        <input
          type='text'
          placeholder='Search by college name'
          value={searchQuery}
          onChange={handleSearch}
          className='px-3 py-2 border rounded-lg'
        />
      </div>
      <div className='lg:grid lg:grid-cols-3 gap-4'>
        {filteredCollages.slice(0, 3).map((collage) => (
          <div key={collage._id} className='card w-96 mt-3 mb-4 shadow-blue-100 shadow-xl'>
            <figure className='px-10 pt-10'>
              <img src={collage.image} alt='Shoes' className='rounded-xl h-60' />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title'>
                <span>Name:</span>
                {collage.college_name}
              </h2>
              <p>
                <span className='font-bold'>Admission Dates:</span>
                {collage.admission_dates}
              </p>
              <p>
                <span className='font-bold'>Events:</span>
                {collage.events}
              </p>
              <p>
                <span className='font-bold'>Research History:</span>
                {collage.research_history}
              </p>
              <p>
                <span className='font-bold'>Sports:</span>
                {collage.sports}
              </p>
              <div className='card-actions'>
                <Link to={`/homecollageview/${collage._id}`} className='btn bg-sky-500 p-3 rounded-xl text-white'>
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Threecards;


// import React, { useContext } from 'react';
// import { CollageContext } from '../context/CollageProvider';
// import { Link } from 'react-router-dom';

// const Threecards = () => {
//     const {collages} = useContext(CollageContext)
//     // console.log('kk',collages)

    

//     return (
//         <>
//            <h1 className='text-sky-500 text-center font-bold text-3xl mt-3 mb-3'>Populer Collage</h1> 
//            <div className='lg:grid lg:grid-cols-3 gap-4'>
//             {
//              collages?.slice(0,3)?.map(collage =>  <div className="card w-96 mt-3 mb-4 shadow-blue-100 shadow-xl">
//              <figure className="px-10 pt-10">
//                <img src={collage.image} alt="Shoes" className="rounded-xl h-60" />
//              </figure>
//              <div className="card-body items-center text-center">
//                <h2 className="card-title"><span>Name:</span>{collage.college_name}</h2>
//                <p><span className='font-bold'>Addmission Dates:</span>{collage.admission_dates}</p>
//                <p><span className='font-bold'>Events:</span>{collage.events}</p>
//                <p><span className='font-bold'>Research History:</span>{collage.research_history}</p>
//                <p><span className='font-bold'>Sports:</span>{collage.sports}</p>
//                <div className="card-actions">
//                  <Link to={`/homecollageview/${collage._id}`} className="btn bg-sky-500 p-3 rounded-xl text-white">View Details</Link>
//                </div>
//              </div>
//            </div>)
//             }
//            </div>
//         </>
//     );
// };

// export default Threecards;