import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import LoginForm from './compenents/LoginForm.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './compenents/Login.jsx'
import Home from './compenents/Home.jsx';
import Alo from './compenents/alo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path:'/login',
    element:<Login/>
  },
 {
   path:"/LoginForm",
   element:<LoginForm />
 },
 {
   path:"/Home",
   element:<Home/>

 },
 {
  path:"/Alo",
  element:<Alo    />
 }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

  