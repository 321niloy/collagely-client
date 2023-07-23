import { sendPasswordResetEmail,getAuth } from 'firebase/auth';
import React, { useRef } from 'react';
import { Form, Link } from 'react-router-dom';
import app from '../firebase/Firebase.config';
import Swal from 'sweetalert2';

const auth = getAuth(app);

const Resetpassword = () => {

    const emailref = useRef()


    const btnReset = event =>{
        event.preventDefault()
        const email = event.target.email.value
        console.log('for reset',email)
        if(!email){
            Swal.fire('Please Provide your email address to reset Password')
        }
        sendPasswordResetEmail(auth,email)
       .then(()=>{
       
        Swal.fire('please cheak your email')
        event.target.reset()
       }) 
       .catch(error =>{
        console.log(error)
       })
    }
    return (
        <div className='mt-16 mb-28 justify-center flex'>
            <div className="card w-96 shadow-sky-200 shadow-2xl">
  <Form onSubmit={btnReset} className="card-body">
    <h2 className="card-title">For Reset Password </h2>
    <input  name='email' placeholder='Email' type="email"  className='border border-sky-500 rounded focus:border-sky-600'/>
    <div className="card-actions justify-center ">
    
    <input className='p-3 rounded-lg bg-sky-500 text-white font-bold' type="submit" value="Reset" />
    </div>
  </Form>
</div>
        </div>
    );
};

export default Resetpassword;

