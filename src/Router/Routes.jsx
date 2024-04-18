import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/Signup/Signup";
import Contact from "../Pages/Contact/Contact";
import Shpos from "../Pages/Shops/Shpos";
import error from '../assets/error.png'
  
  export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        errorElement: <img className="mx-auto lg:mt-[100px] mt-[120px] lg:w-[300px]" src={error} alt="" /> ,
        children : [
            {
                path: '/',
                element: <Home/>
            },
            {
              path: 'login',
              element:<Login/>
            },
            {
              path: 'signup',
              element:<Signup/>
            },
            {
              path: 'contact',
              element: <Contact/>
            },
            {
              path: 'shops',
              element : <Shpos/>
            }
            
        ]
    },
   
  ]);