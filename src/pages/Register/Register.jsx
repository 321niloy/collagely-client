import React, { useContext, useState } from 'react';
import Lottie from 'react-lottie';
import loter from './../../relog.json'
import './register.css'
import { Form, Link } from 'react-router-dom';
import { Authcontext } from '../../context/AuthProvider';
import Swal from 'sweetalert2';

// photo
const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN
//--------
const Register = () => {
       // photo
const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
//   photo end
const {createusers,updateUserProfile} =useContext(Authcontext)
const [error,seterror]= useState('')
const [success,setsuccess]= useState('')




const forsighnup =async (event) =>{
  


event.preventDefault()
setsuccess('')
seterror('')
const form = event.target
const name=form.name.value
const email = form.email.value
const password = form.password.value
const ConfirmPassword = form.cpassword.value

// console.log(name,email,password,ConfirmPassword)

// Validation start
if(!/(?=.*[A-Z])/.test(password)){
  seterror("Please atleast set one Uppercase")
  return;
}
else if(password.length<6){
  seterror("Please atleast set six carecter in your Password")
}

else if (!/(?=.*[!@#$%^&*])/.test(password)) {
  seterror("Please include at least one special character");
  return;
}
else if(password !== ConfirmPassword){
  seterror("password and Confirm password should same");
  return;
}


// Validation End


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

// ----==================-Create email------------===
createusers(email,password)
.then(result=>{
  const createuser = result.user;
  console.log("signup createuser",createuser)
  Swal.fire('Register SuccessFully')
  setsuccess('succesfully Signup')
  
// updateUserProfile=======

  updateUserProfile(name,imgurl)
             .then(() => {
                console.log('Profile updated successfully');
                // ... Rest of your code
              })
              .catch((error) => {
                console.log('Error updating profile:', error);
                // ... Rest of your code
              });

              // ==========updateUserProfile end


      form.reset()
      })

 .catch(error =>{
 console.log(error)
 seterror(error.massage)
  })
          // email end ----------------------
        }
      })  // ================ end photo
  

    }
    // ================ end form

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loter,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
    }
    return (
        <div>
            <div className="hero min-h-screen ">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">

  <Form onSubmit={forsighnup}  id='forheight' className="card flex-shrink-0 w-full max-w-sm shadow-sky-400 shadow-xl lg:w-1/2 h-full">
      <div  className="card-body" >
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input name='name' type="text" placeholder="Name" className="input input-bordered  focus:border-slate-400" required />
        </div>
     
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="text" placeholder="email" className="input input-bordered  focus:border-slate-400" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name="password"  type="text" placeholder="password" className="input input-bordered focus:border-slate-400" required />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input name='cpassword' type="text" placeholder="Confirm password" className="input input-bordered focus:border-slate-400" required />
        </div>

        <div className="form-control  w-full my-4">
                    <label className="label ">
                        <span className="label-text">Your Image ___</span>
                    </label>
                    <input   id="image-input" type="file" className="file-input file-input-bordered w-full focus:bg-slate-300 text-black"  accept="image/*" />
                </div>


        <label className="label">
            <Link to='/reset' className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
          <p className='text-green-700 text-xs'>{success}</p>
          <p className='text-red-700   text-xs '>{error}</p>
        <div className="form-control mt-6">
          <input className="btn mb-4 bg-sky-500 text-white hover:bg-sky-300  " type="submit" value="Register" />
        </div>
      </div>
    </Form>







    <div className="text-center  lg:w-1/2">
      <h1 className="lg:text-5xl text-3xl font-bold">Create an Acount</h1>
      <p className="py-6 ">You can get Cars offer Prices. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='lg:w-400 lg:h-400 w-300 h-300'>
      <Lottie options={defaultOptions}
              />
      </div>
    </div>



  
  </div>
</div>
        </div>
    );
};

export default Register;


