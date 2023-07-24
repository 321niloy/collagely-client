import React, { useEffect, useState } from 'react';
import Axios from './Axios';

const Feddbacks = () => {
    const [review, setReviews] = useState([]);

  useEffect(() => {
    const url = '/reviews';
    Axios.get(url)
      .then(res => {
        setReviews(res);
        // console.log("dj", res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
    return (
        <div className='mt-3 mb-3'>
            <h1 className='text-sky-300 font-bold text-center text-3xl'>++  Reviews Sections  ++</h1>
            <div className=' mb-3 mt-3' style={{ margin: '0 auto', maxWidth: 'min-content' }}>
                {
                    review?.map(r => <div className="card  bg-base-100 shadow-sky-200 shadow-2xl mb-4 mt-4 "style={{ width: '500px',height: 'fit-content'}}>
                    <div className="card-body">
                      <h2 className="card-title"><span className='font-bold'>Collage Name:</span>{r.collageName}</h2>
                      <p><span className='font-bold'>Name:</span>{r.candidateName}</p>
                      <p><span className='font-bold'>Review:</span>{r.text}</p>
                     
                    </div>
                  </div>)
                }
            </div>
        </div>
    );
};

export default Feddbacks;