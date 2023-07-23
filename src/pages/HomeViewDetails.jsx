import React from 'react';
import { useLoaderData } from 'react-router-dom';

const HomeViewDetails = () => {
    
    const    kumfu = useLoaderData()
    console.log("littlebit",kumfu)
    return (
        <div>
            <div>
                <img className='w-full h-96' src={kumfu.image} alt="" />
                
               <div className='text-center'>
               <h1><span className='f-bold'>Addmission Process:</span>{kumfu.admission_process}</h1>
                <h1><span className='f-bold'>Events:</span>{kumfu.events}</h1>
                <h1><span className='f-bold'>Research Work:</span>{kumfu.research_work}</h1>
                <h1><span className='f-bold'>Sports categories:</span>{kumfu.sports_category}</h1>
               </div>
            </div>
        </div>
    );
};

export default HomeViewDetails;