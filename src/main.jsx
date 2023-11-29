import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import MainRoutes from './routes/MainRoutes.jsx'
import AuthProviders from './providers/AuthProviders.jsx'
import {QueryClient,QueryClientProvider,
} from '@tanstack/react-query'
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  
    <React.StrictMode>
       <QueryClientProvider client={queryClient}>
       <AuthProviders>
   <RouterProvider router={MainRoutes}></RouterProvider>
   </AuthProviders>
    </QueryClientProvider>
  </React.StrictMode>
  ,
)
