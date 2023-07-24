import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from '../context/AuthProvider';
import Axios from '../component/Axios';
import useCard from '../hooks/useCard';
import { Form } from 'react-router-dom';
import Swal from 'sweetalert2';

const Mycollages = () => {
  const { user } = useContext(Authcontext);
  const [collegeCards] = useCard();
  const [subdata, setsubdata] = useState([]);
  const [mycollages, setMycollages] = useState([]);

  useEffect(() => {
    const url = `/submission?email=${user?.email}`;
    Axios.get(url)
      .then(res => {
        setsubdata(res); // Assuming that the response contains an array of data, use res.data to set the state.
      })
      .catch(error => {
        console.log(error);
      });
  }, [user?.email]);

  useEffect(() => {
    if (subdata.length > 0) {
      // Filter collegeCards based on subdata.collageName
      const filteredCollages = collegeCards.filter(card =>
        subdata.some(sub => sub.collageName === card.college_name)
      );
      setMycollages(filteredCollages);
    }
  }, [collegeCards, subdata]);


  const forReview = event =>{
    event.preventDefault()
    const form= event.target;
    const text = form.text.value;
    const collageName = form.cname.value
    const candidateName = form.name.value
    console.log(text,collageName,candidateName)

    const allData = {
     collageName,
     candidateName,
     text
      };

 
      fetch(`http://localhost:8000/reviews`,{
        method: "POST", 
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(allData)

    })
    .then(res => res.json())
    .then(data => {
      console.log('zz',data)
      if(data.acknowledged>0){
        Swal.fire(
          'Review Succesfull!',
          'You clicked the button!',
          'success'
        )
        form.reset()
    }
    })

   }

  return (
    <div className='mt-10 mb-10'>
      <h1>MyCollages</h1>
      <div key={mycollages?.id} className='mt-4 mb-4'>
        {mycollages?.map(c => (
          <div key={c.id}>
            {/* Render your college cards here */}
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src={c.image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"><span className='font-bold'>CollageName:</span>  {c.college_name}</h2>
    <p><span className='font-bold'>Admission Date:</span>  {c.admission_dates}</p>
    <p><span className='font-bold'>Event:</span>  {c.events}</p>
    <p><span className='font-bold'>Research History:</span>  {c.research_history}</p>
    <p><span className='font-bold'>Sports: </span>  {c.sports}</p>
    <p><span className='font-bold'> Addmission Process: </span>  {c.admission_process}</p>
    <div className="card-actions justify-center">
      <Form onSubmit={forReview}>
        <input name='name'  type="text" placeholder="Your Name" className="input mb-2 input-bordered input-info w-full max-w-xs" />
        <div><input name='cname' type="text" placeholder="Collage Name" className="input mb-2 input-bordered input-info w-full max-w-xs" defaultValue={c.college_name} /></div>
        <div><textarea name='text' className="textarea textarea-info" placeholder="Review"></textarea></div>
        <input className='p-3 flex justify-center bg-sky-500 text-white rounded-xl' type="submit" value="Review Submit" />
      </Form>
    </div>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mycollages;
