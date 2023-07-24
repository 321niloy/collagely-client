import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../context/AuthProvider';

const Navbar = () => {
  const {user,logOut} = useContext(Authcontext)

  const logoutbutton = () =>{
    logOut()
    .then()
    .catch(error => console.log(error))
    
     }
    return (
        <div>
            <div className="navbar bg-slate-200">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="ms-1 menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white font-bold rounded-box w-52">
        <Link className='mb-2  p-2 rounded-xl ' to="/">Home</Link>
        <Link className='mb-2  p-2 rounded-xl ' to="/collages">Collages</Link>
       {
        user &&  <Link to="/mycollage" className='mb-2  p-2 rounded-xl ' >My Collage</Link>
       }
       {
        user &&  <Link to='/own' className='mb-2  p-2 rounded-xl '>Update Own Data</Link>
       }
        <Link className='mb-2  p-2 rounded-xl ' to="/addmission">Addmission</Link>
        
      </ul>
    </div>
    <Link to='/' className=" lg:text-2xl text-sm">Collagely</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <Link to="/" className='ms-2 hover:bg-white hover:font-bold text-lg p-2 rounded-lg'>Home</Link>
        <Link to="/collages" className='ms-2 hover:bg-white hover:font-bold text-lg p-2 rounded-lg'>Collages</Link>
        
        <Link to="/addmission" className='ms-2 hover:bg-white hover:font-bold text-lg p-2 rounded-lg'>Addmission</Link>
        {
          user && <Link to="/mycollage" className='ms-2 hover:bg-white hover:font-bold text-lg p-2 rounded-lg'>My Collage</Link>
        }
        {
        user &&  <Link to='/own' className='ms-2 hover:bg-white hover:font-bold text-lg p-2 rounded-lg'>Update Own Data</Link>
        }
    </ul>
  </div>
  <div className="navbar-end ">
    {
      user && <div className="avatar">
      <div className="lg:w-12 w-8 me-2 ms-0  rounded-xl">
        <img src={user?.photoURL} />
      </div>
    </div>
    }
    {
      user?<span onClick={logoutbutton}  className='lg:p-3 p-2 rounded-lg bg-sky-500 hover:bg-white hover:font-serif hover:font-bold text-white font-bold hover:text-black'>Log Out</span>:<Link to='/login' className='lg:p-3 p-2 bg-sky-500 hover:bg-white hover:font-serif hover:font-bold text-white font-bold hover:text-black'>Login</Link>
    }
    <Link to='/register' className='lg:p-3 p-2 ms-2 rounded-lg bg-sky-500 hover:bg-white hover:font-serif hover:font-bold text-white font-bold hover:text-black'>Register</Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;