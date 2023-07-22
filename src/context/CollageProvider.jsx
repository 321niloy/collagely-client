import React, { createContext, useEffect, useState } from 'react';
import Axios from '../component/Axios';

export const CollageContext = createContext()
const CollageProvider = ({children}) => {
    const [collages, setCollages] = useState([]);

  useEffect(() => {
    const url = '/collages';
    Axios.get(url)
      .then(res => {
        setCollages(res);
        // console.log("dj", res);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

const collageinfo ={
    collages
}
    return (
      <CollageContext.Provider value={collageinfo}>{children}</CollageContext.Provider>
    );
};

export default CollageProvider;