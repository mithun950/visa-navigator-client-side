import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";
import { BsMoon, BsSun } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Navbar = ({onToggle}) => {


  const {logOut,user} = useContext(AuthContext);
  const [error,setError]  = useState("")

  


  const navigate= useNavigate();



  

  const handleLogOut = () => {
    logOut()
    .then(() => {
        window.location.reload() ;
        navigate('/');
        toast.success('logOut successfully!');

       
    })
    .catch(error => setError(error.message)
  );
}



    const links = <>
    
        
              <NavLink to="/" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-green-500 px-4 py-2 rounded-lg"
            : "text-white font-bold dark:text-white px-4 py-2 rounded-lg"
        }>Home</NavLink>
              <NavLink to="/all-visas" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-green-500 px-4 py-2 rounded-lg"
            : "text-white font-bold dark:text-white px-4 py-2 rounded-lg"
        }>All-Visas</NavLink>
              <NavLink to="/add-visa" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-green-500 px-4 py-2 rounded-lg"
            : "text-white font-bold dark:text-white px-4 py-2 rounded-lg"
        }>Add-Visa</NavLink>
              <NavLink to="/my-added-visas" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-green-500 px-4 py-2 rounded-lg"
            : "text-white font-bold dark:text-white px-4 py-2 rounded-lg"
        }>My-Added-Visas</NavLink>
              <NavLink to="/my-visa-applications" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-green-500 px-4 py-2 rounded-lg"
            : "text-white font-bold dark:text-white px-4 py-2 rounded-lg"
        }>My-Visa-Applications</NavLink>
    
    </>
    return (
        <div className="sticky top-0 z-50 backdrop-blur-md w-full bg-blue-500 dark:bg-slate-600   dark:text-white">
          <ToastContainer></ToastContainer>
          <div className="navbar w-11/12 mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu bg-blue-500 menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {links}
      </ul>
    </div>
    <img className="w-20 h-30" src="https://i.ibb.co.com/S51Bpdk/image.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">

     
<div className="flex items-center mr-3">
  <label className="swap swap-rotate">
    <input type="checkbox" onChange={onToggle} />
  
    <BsMoon className="swap-off w-8 h-8 text-black" />
    <BsSun className="swap-on w-8 h-8 text-yellow-500" />
  
 
  </label>
</div>
          {
            !user ? (<>
            
            <NavLink to="/login" className="btn btn-secondary mr-3">Login</NavLink>
            <NavLink to="/register" className="btn btn-secondary">Register</NavLink>
            </>
            ): (
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                         <img className="w-10 rounded-full"
                         src={user.photoURL}
                         alt=""/>
                    </div>
                    <ul className="menu menu-sm dropdown-content absolute bg-blue-500 rounded-box mt-3 w-96 h-44  shadow">
                        <li className="group-hover:block">
                            <a className="text-center  text-white text-xl flex justify-center">{user.displayName}</a>
                        </li>
                        <li className="group-hover:block ">
                       <button onClick={handleLogOut} className="btn btn-sm text-white btn-error mt-6 w-full">
                         Logout
                       </button>
                       <Link to="/updateProfile"  className="btn btn-sm text-white btn-secondary mt-3  w-full">
                         Update Profile
                       </Link>
              </li>
                    </ul>

                </div>
            )

            
          }
  </div>
  </div>
</div>
    );
};

export default Navbar;