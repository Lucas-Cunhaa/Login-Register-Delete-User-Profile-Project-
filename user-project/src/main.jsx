import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from '../src/routes/loginPage.jsx'
import Register from '../src/routes/registerPage.jsx'
import Profile from '../src/routes/profilePage.jsx'
import ErrorPage from '../src/routes/errorPage.jsx'
const router = createBrowserRouter([
  {
    path:"/",
    element: <Login />,
    errorElement: <ErrorPage />

  }, 
  {
    path: "register",
    element: <Register />
  }, 
  {
   path: "profile",
   element: <Profile />
   }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
