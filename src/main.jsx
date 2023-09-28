import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/Router'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { PharmacyContextProvider } from './contexts/PharmacyContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PharmacyContextProvider>
      <RouterProvider router={router}/>
    </PharmacyContextProvider>     
  </React.StrictMode>
)