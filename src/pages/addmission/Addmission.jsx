import React, { useContext } from 'react';

import { Link } from 'react-router-dom';
import { CollageContext } from '../../context/CollageProvider';

const Addmission = () => {
    const {collages} = useContext(CollageContext)
    return (
        <>
        <h1 className=' text-3xl text-center mt-3 mb-3 text-sky-500 font-bold'>Click For want to Submmision</h1>
           <div className='lg:grid lg:grid-cols-3 gap-4 bg-slate-300 pt-2 pb-2'>
           {
                collages?.map((collages,index) => <div className='p-3 rounded-xl bg-white'><Link to={`/forsubmition/${collages._id}`} className='text-lg hover:underline '>{index+1}. {collages.college_name}</Link></div>)
           }
           </div>
        </>
    );
};

export default Addmission;