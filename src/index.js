import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './Pages/About';
import Home from './Pages/Home';
import Advertise from './Pages/Advertise';
import Landlord from './Pages/Landlord';
import User from './Pages/User';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "Home",
    element: <Home/>,
  },
  {
    path: "About",
    element: <About/>,
  },
  {
    path: "advertise",
    element: <Advertise/>,
  },
  {
    path: "Landlord",
    element: <Landlord/>,
    
  },
  {
    path: "User",
    element: <User/>,
  },
  

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
