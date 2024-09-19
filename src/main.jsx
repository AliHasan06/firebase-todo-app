import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Todo from './pages/Todo.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout />,
    children:[
      {
        path:'register',
        element:<Register />
      },
      {
        path:'login',
        element:<Login />
      },
      {
        path:'Todo',
        element:<Todo />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(

  <RouterProvider router={router} />

)
