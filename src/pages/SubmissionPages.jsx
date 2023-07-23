import React, { useContext } from 'react';
import { Form, useLoaderData } from 'react-router-dom';
import Axios from '../component/Axios';
import { Authcontext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN

const SubmissionPages = () => {
    const subdata = useLoaderData()
    const {user}= useContext(Authcontext)

         // photo
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
//   photo end
    
    const forsubmission = (event) =>{
        event.preventDefault()
        const form = event.target;
        const collageName= subdata?.college_name
        const candidateName=form.cname.value
        const email= form.email.value
        const subject=form.subject.value
        const phone=form.phone.value
        const address=form.address.value
        const dateofBirth=form.date.value
        

        // console.log(collageName,candidateName,email,subject,phone,address,dateofBirth)

         //============= photo
    const formData = new FormData();
    const imageFile = document.getElementById('image-input').files[0];
    formData.append('image',imageFile)
    fetch(img_hosting_url,{
        method:'POST',
        body:formData
    })
    .then(res => res.json())
    .then(imageres => {
      
    if(imageres.success){
    const imgurl = imageres.data.display_url;
    

// ----==================--post data using axios-----------===
const allData = {
    collageName,
    candidateName,
    email,
    subject,
    phone,
    address,
    dateofBirth,
   imgurl,
  };

  try {
    const url = '/submission'; // Replace 'YOUR_API_ENDPOINT' with the actual URL where you want to post the data

    const response =  Axios.post(url, allData);

    console.log('Data posted successfully:', response.data);
    Swal.fire('Submission Successfully')
    form.reset()
  } catch (error) {
    console.error('Error posting data:', error);
  }
          // post end using axios ----------------------
        }
      })
        
       
    }
    return (
        <div>
            <h1>{subdata.college_name}</h1>
            <div className="hero min-h-screen bg-white">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <Form onSubmit={forsubmission} className="card flex-shrink-0 w-full max-w-sm  shadow-sky-100 shadow-2xl bg-white h-fit">
      < div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Name:</span>
          </label>
          <input name='cname' type="text" placeholder="Candidate Name" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Email:</span>
          </label>
          <input name='email' type="text" placeholder="Candidate Email" className="input input-bordered" defaultValue={user?.email} required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Candidate Subjects:</span>
          </label>
          <input name='subject' type="text" placeholder="Candidate subjects" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Phone:</span>
          </label>
          <input name='phone' type="text" placeholder="Phone" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Adress:</span>
          </label>
          <input name='address' type="text" placeholder="Adress" className="input input-bordered" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Date of Birth:</span>
          </label>
          <input name='date' type="text" placeholder="Date" className="input input-bordered" required/>
        </div>
        <div className="form-control  w-full my-4">
                    <label className="label ">
                        <span className="label-text">Your Image ___</span>
                    </label>
                    <input   id="image-input" type="file" className="file-input file-input-bordered w-full focus:bg-slate-300 text-black"  accept="image/*" />
                </div>
        <div className="form-control mt-6">
          <input className='bg-sky-500 p-3 rounded-2xl' type="submit" value="Submit" />
        </div>
      </div>
    </Form>
  </div>
</div>
        </div>
    );
};

export default SubmissionPages;