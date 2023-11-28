import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes.jsx'
import AuthProviders from './providers/AuthProviders.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
   <AuthProviders>
   <RouterProvider router={MainRoutes}></RouterProvider>
  
   </AuthProviders>
  </React.StrictMode>
  ,
)
