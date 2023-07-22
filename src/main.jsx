import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './component/Route.jsx';
import AuthProvider from './context/AuthProvider';
import CollageProvider from './context/CollageProvider';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
  <CollageProvider>
  <RouterProvider router={router} />
  </CollageProvider>
 </AuthProvider>
     
    
  </React.StrictMode>,
)
