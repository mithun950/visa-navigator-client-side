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
import UpdateProfile from './Auth/UpdateProfile.jsx';
import Error from './Pages/Error.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    loader: () => fetch("https://visa-navigator-backend-swart.vercel.app/visa"),
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
        element: <PrivateRoutes><AddVisa></AddVisa></PrivateRoutes>,
      },
      {
        path: "/my-added-visas",
        element: <PrivateRoutes><MyAddedVisa></MyAddedVisa></PrivateRoutes>,
        loader: async() => {const res = await fetch('https://visa-navigator-backend-swart.vercel.app/visa')
          const data = await res.json()
          return data;
        }
      },
      {
        path: "/my-visa-applications",
        element: <PrivateRoutes><MyVisaApplications></MyVisaApplications></PrivateRoutes>,
        loader: () => fetch('https://visa-navigator-backend-swart.vercel.app/applications')

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
 {
   path:"/updateProfile",
   element: <UpdateProfile></UpdateProfile>,
 },
 {
  path: "*",
  element: <Error></Error>,
 }
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
