import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from '../pages/Home';
import Main from './Main';
import Collages from '../pages/Collages';
import Addmission from '../pages/addmission/Addmission';
import Mycollages from '../pages/Mycollages';
import Fourzerofour from '../pages/Fourzerofour';
import Register from '../pages/Register/Register';
import Login from '../pages/Login/Login';
import HomeViewDetails from '../pages/HomeViewDetails';
import CollageViewDetails from '../pages/CollageViewDetails';
import SubmissionPages from '../pages/SubmissionPages';
import Resetpassword from '../pages/Resetpassword';
import Owndata from '../pages/Owndata';
import Directupdatepage from '../pages/Directupdatepage';


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:'collages',
          element:<Collages></Collages>
        },
        {
          path:'addmission',
          element:<Addmission></Addmission>
        },
        {
          path:'mycollage',
          element:<Mycollages></Mycollages>
        },
        {
          path:'register',
          element:<Register></Register>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'homecollageview/:id',
          element:<HomeViewDetails></HomeViewDetails>,
          loader:({params}) =>  fetch(`https://collagely-server.vercel.app/collages/${params.id}`)
        },
        {
          path:'collageview/:id',
          element:<CollageViewDetails></CollageViewDetails>,
          loader:({params}) =>  fetch(`https://collagely-server.vercel.app/collages/${params.id}`)
        },
        {
          path:'forsubmition/:id',
          element:<SubmissionPages></SubmissionPages>,
          loader:({params}) =>  fetch(`https://collagely-server.vercel.app/collages/${params.id}`)
        },
        ,
        {
          path:'/updateown/:id',
          element:<Directupdatepage></Directupdatepage>,
          loader:({params}) =>  fetch(`https://collagely-server.vercel.app/submission/${params.id}`)
        },
        {
          path:'reset',
          element:<Resetpassword></Resetpassword>
        },
        {
          path:'own',
          element:<Owndata></Owndata>
        }
      ]
    },
    {
      path:'*',
      element:<Fourzerofour></Fourzerofour>
    }
  ]);

