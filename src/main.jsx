import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayouts from './Components/MainLayouts/MainLayouts.jsx';
import AllVisas from './Pages/AllVisas.jsx';
import AddVisa from './Pages/AddVisa.jsx';
import MyAddedVisa from './Pages/MyAddedVisa.jsx';
import MyVisaApplications from './Pages/MyVisaApplications.jsx';
import Banner from './Components/Banner.jsx';
import LatestVisa from './Components/LatestVisa.jsx';
import VisaDetails from './Components/VisaDetails.jsx';
import Login from './Auth/Login.jsx';
import Register from './Auth/Register.jsx';
import AuthProvider from './Auth/AuthProvider.jsx';
import PrivateRoutes from './Auth/PrivateRoutes.jsx';
import PopularDestinations from './Components/PopularDestiny.jsx';
import PopularDestiny from './Components/PopularDestiny.jsx';
import ForgatePass from './Auth/ForgatePass.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    loader: () => fetch("http://localhost:3000/visa"),
    children: [
      {
        path: "/",
        element: <Banner></Banner>,
      },
      
      {
        path:"/all-visas" ,
        element: <AllVisas></AllVisas>,

      },
      {
        path: "/add-visa",
        element: <AddVisa></AddVisa>,
      },
      {
        path: "/my-added-visas",
        element: <PrivateRoutes><MyAddedVisa></MyAddedVisa></PrivateRoutes>,
        loader: async() => {const res = await fetch('http://localhost:3000/visa')
          const data = await res.json()
          return data;
        }
      },
      {
        path: "/my-visa-applications",
        element: <PrivateRoutes><MyVisaApplications></MyVisaApplications></PrivateRoutes>,
        loader: () => fetch('http://localhost:3000/applications')

      },
      {
        path: '/visaDetails',
        element:<PrivateRoutes> <VisaDetails></VisaDetails></PrivateRoutes>,
      }
    
    ]
  },
 {
  path: '/login',
  element: <Login></Login>,

 },
 {
  path: '/register',
  element: <Register></Register>,
 },
 {
  path: '/forgatePass',
  element: <ForgatePass></ForgatePass>,
 },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
