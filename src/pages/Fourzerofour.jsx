import React from 'react';

import four from "./../fourzero.json";
import { Link } from 'react-router-dom';
import Lottie from 'react-lottie';



const Fourzerofour = () => {



    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: four,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
              <div className='w-fit mx-auto lg:h-96'>
      <Lottie options={defaultOptions}
              />
        </div>
        <div className='flex justify-center'>
        <Link to="/" className='p-3 bg-slate-400 text-white rounded'>Back Home</Link>
        </div>
        </div>
    );
};

export default Fourzerofour;