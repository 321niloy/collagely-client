import React, { useContext, useEffect, useMemo, useState } from 'react';
import { Authcontext } from '../context/AuthProvider';
import Axios from '../component/Axios';
import { CollageContext } from '../context/CollageProvider';

const Mycollages = () => {
    const{user}=useContext(Authcontext)
    const{collages}=useContext(CollageContext)
    // console.log('for cheak',user.email)
    const [subdata, setsubdata] = useState([]);
    const [mycollages,setMycollages] =useState([])

   
    

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

useEffect(()=>{
    const filtering = collages?.filter(c=> c.college_name === subdata.collageName)
    console.log("feek",filtering)
},[collages,subdata])

    console.log('collages',collages)
    console.log('subdata',subdata)

    return (
        <div>
            <h1>MyCollages</h1>
            <div>
               {
                mycollages?.map(c => console.log("doc",c))
               }
            </div>
        </div>
    );
};

export default Mycollages;