import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './component/Route.jsx';
import AuthProvider from './context/AuthProvider';
import CollageProvider from './context/CollageProvider';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'



const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
  <CollageProvider>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
  </CollageProvider>
 </AuthProvider>
     
    
  </React.StrictMode>,
)

