import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './router/index.jsx'
import { RouterProvider } from 'react-router-dom'
import UserProvider from './context/UserContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
      <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
  </UserProvider>
)
