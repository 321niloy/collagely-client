import React from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import Axios from '../component/Axios';




const Directupdatepage = () => {
    const dupdate = useLoaderData()
    console.log('dupdate',dupdate)


const forsubmission = (event) =>{
    event.preventDefault()
    const form = event.target;
    const candidateName=form.cname.value
    const email= form.email.value
    const subject=form.subject.value
    const phone=form.phone.value
    const address=form.address.value
    const dateofBirth=form.date.value
    const imgurl = form.image.value

    // console.log(candidateName,email,subject,phone,address,dateofBirth,imgurl)

     //============= photo
// ----==================--post data using axios-----------===
const allData = {
candidateName,
email,
subject,
phone,
address,
dateofBirth,
imgurl,
};

try {
const url = `/submission/${dupdate?._id}`; // Replace 'YOUR_API_ENDPOINT' with the actual URL where you want to post the data

const response =  Axios.put(url, allData);

console.log('Data posted successfully:', response.data);
Swal.fire('Submission Successfully')
form.reset()
} catch (error) {
console.error('Error posting data:', error);
}
      // post end using axios ----------------------
    
  
    
   
}

    return (
        <div>
            <h1 className='text-3xl text-sky-500 text-center mt-3 mb-3'>Update your Data</h1>
            <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <Form onSubmit={forsubmission} className="card flex-shrink-0 w-full max-w-sm  shadow-sky-100 shadow-2xl bg-white h-fit">
      < div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Name:</span>
          </label>
          <input name='cname' type="text" placeholder="Candidate Name" className="input input-bordered" defaultValue={dupdate?.candidateName} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Email:</span>
          </label>
          <input name='email' type="text" placeholder="Candidate Email" className="input input-bordered" defaultValue={dupdate?.email}  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Subjects:</span>
          </label>
          <input name='subject' type="text" placeholder="Candidate subjects" className="input input-bordered" defaultValue={dupdate?.subject}  required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone:</span>
          </label>
          <input name='phone' type="text" placeholder="Phone" className="input input-bordered" defaultValue={dupdate?.phone} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Adress:</span>
          </label>
          <input name='address' type="text" placeholder="Adress" className="input input-bordered" defaultValue={dupdate?.address} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth:</span>
          </label>
          <input name='date' type="text" placeholder="Date" className="input input-bordered" defaultValue={dupdate?.dateofBirth} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image Url</span>
          </label>
          <input name='image' type="text" placeholder="Image url" className="input input-bordered" defaultValue={dupdate?.imgurl} required/>
        </div>
        <div className="form-control mt-6">
          <input className='bg-sky-500 p-3 rounded-2xl text-white' type="submit" value="Update" />
        </div>
      </div>
    </Form>
  </div>
</div>
        </div>
    );
};

export default Directupdatepage;