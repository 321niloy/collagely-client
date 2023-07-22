import React, { useContext } from 'react';
import { CollageContext } from '../context/CollageProvider';


const Collages = () => {
    const {collages} =useContext(CollageContext)
    console.log("colda",collages)
    return (
        <div>
            <h1>Collages</h1>

         <div className='grid grid-cols-3 gap-4 mt-3 mb-3'>
            {
               collages.map (collages => <div key={collages._id} className="card w-96 bg-base-100 shadow-xl">
               <figure className="px-10 pt-10">
                 <img src={collages.image} alt="Shoes" className="rounded-xl" />
               </figure>
               <div className="card-body items-center text-center">
                 <h2 className="card-title">{collages.college_name}</h2>
                 <p><span className='mb-1 font-bold'>Rating: </span>{collages.rating}</p>
                 <p><span className='mb-1 font-bold'>Addmission Date: </span>{collages.admission_dates}</p>
                 <p><span>Reasearch Number:</span>{collages.research_number}</p>
                 <div className="card-actions">
                   <button className="btn bg-sky-400 text-white hover:bg-sky-200">View Details</button>
                 </div>
               </div>
             </div>)
            }
         </div>

        </div>
    );
};

export default Collages;