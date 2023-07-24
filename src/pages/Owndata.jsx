import React, { useContext, useEffect, useState } from 'react';
import Axios from '../component/Axios';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/AuthProvider';

const Owndata = () => {
    const{user}=useContext(Authcontext)
    const [subdata, setsubdata] = useState([]);

    useEffect(() => {
        const url = `/submission?email=${user?.email}`;
        Axios.get(url)
          .then(res => {
              setsubdata(res);
            // console.log("dj", res);
          })
          .catch(error => {
            console.log(error);
          });
      }, [user?.email,]);

    return (
        <div className='mt-10 mb-10'>
            <h1 className='text-3xl text-sky-500 text-center mt-3 mb-3'>Click collage name for Update you Submission Data</h1>
       <div className='lg:grid lg:grid-cols-3'>
       {
        subdata?.map(sub =><Link to={`/updateown/${sub._id}`} className='font-bold hover:underline'>{sub.collageName}</Link>)
       }
       </div>
       
        </div>
    );
};

export default Owndata;