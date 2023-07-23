import React, { useContext, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import loter from '../../relog.json'
import { Form, Link } from 'react-router-dom';

import google from '../../../public/Image/GOOGLE.png'
import { Authcontext } from '../../context/AuthProvider';




const Login = () => {
    const [success,setsuccess]=useState('')
  const[error,seterror]=useState('')
  const{signin,googleSignIn}=useContext(Authcontext)

  const forLogin = event =>{



    event.preventDefault()
    const form = event.target
    const email = form.email.value
    const password = form.password.value


    signin(email,password)
    .then(result =>{
      const loguser = result.user
      console.log(loguser)
      setsuccess('Login Successful')
    })
    .catch(error=>{
      console.log(error)
      seterror("Password or email is wrong",error.messege)
    })
  }

  const googlelogin = ()=>{
    googleSignIn()
    .then((result) => {
      const loguser = result.user;
  
      navigate(from, { replace: true });
      console.log(loguser)
    })
    .catch((error) => {
      console.log("ERROR",error)
    })
  }


// lottie
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: loter,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
        //lottie
    }
    return (
        <>
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col-reverse lg:flex-row-reverse">

  <Form onSubmit={forLogin} id='forheight' className="card flex-shrink-0 w-full max-w-sm shadow-sky-400 shadow-xl lg:w-1/2 ">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input  name='email' type="text" placeholder="email" className="input input-bordered  focus:border-slate-400" required/>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="text" placeholder="password" className="input input-bordered focus:border-slate-400" required/>
          <label className="label">
            <Link to='/reset' href="#" className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <p className='text-sm text-green-700'>{success}</p>
        <p className='text-sm text-red-700'>{error}</p>
        <div className="form-control mt-6">
          <input className="btn mb-4 bg-sky-400 text-white hover:bg-sky-200" type="submit" value="LogIn" />
          
        </div>
        <span onClick={googlelogin}  className='flex items-center justify-center p-4 '><span><img className="w-6" src={google} alt="" /></span><span className='text-orange-600 text-lg ms-2' >Google</span></span>
      </div>
    </Form>







    <div className="text-center  lg:w-1/2">
      <h1 className="lg:text-5xl text-3xl font-bold">Login now!</h1>
      <p className="py-6 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className='lg:w-400 lg:h-400 w-300 h-300'>
      <Lottie options={defaultOptions}
              />
      </div>
    </div>



  
  </div>
</div>
        </>
    );
};

export default Login;