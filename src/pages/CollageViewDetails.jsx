import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CollageViewDetails = () => {

    const usekumfu = useLoaderData()
    console.log(usekumfu)
    return (
        <div>
            <div>
                <img className='w-full h-96' src={usekumfu.image} alt="" />
                <div className='text-center'>
                <p><span className='f-bold'>Events:</span>{usekumfu.events}</p>
                <p><span className='f-bold'>Events Describtion:</span>{usekumfu.events_description}</p>
                <p><span className='f-bold'>Sports:</span>{usekumfu.sports}</p>
                <p><span className='f-bold'>sports_Category:</span>{usekumfu.sports_category}</p>
                </div>
            </div>
        </div>
    );
};

export default CollageViewDetails;