import { useContext, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { BsMoon, BsSun } from "react-icons/bs";

const Navbar = ({ onToggle }) => {
  const { logOut, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        window.location.reload();
        navigate('/');
        toast.success('LogOut successfully!');
      })
      .catch(error => setError(error.message));
  };

  const links = <>
    <NavLink to="/" className={({ isActive }) =>
      isActive
        ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
        : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
    }>Home</NavLink>
    <NavLink to="/all-visas" className={({ isActive }) =>
      isActive
        ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
        : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
    }>All-Visas</NavLink>
    
    {/* Only show these links if user is logged in */}
    {user && (
      <>
        <NavLink to="/add-visa" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
            : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
        }>Add-Visa</NavLink>
        <NavLink to="/my-added-visas" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
            : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
        }>My-Added-Visas</NavLink>
        <NavLink to="/my-visa-applications" className={({ isActive }) =>
          isActive
            ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
            : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
        }>My-Visa-Applications</NavLink>
      </>
    )}
     <NavLink to="/about" className={({ isActive }) =>
      isActive
        ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
        : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
    }>About-Us</NavLink>
     <NavLink to="/contactUs" className={({ isActive }) =>
      isActive
        ? "text-white font-bold bg-main-color px-4 py-2 rounded-lg"
        : "text-black font-bold dark:text-white px-4 py-2 rounded-lg"
    }>Contact-Us</NavLink>
  </>;

  return (
    <div className="fixed top-0 z-50 w-full bg-lime-400 dark:bg-slate-600 dark:text-white backdrop-blur bg-opacity-40 h-20">
      <ToastContainer />
      <div className="navbar w-11/12 mx-auto flex justify-between items-center h-full">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-font-color lg:hidden">
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
              className="menu bg-lime-300 menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <img className="w-20 h-30" src="https://worldpassports.org/wp-content/uploads/2024/02/tourist-visa.png" alt="" />
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
              <BsMoon className="swap-off w-6 h-6 text-font-color" />
              <BsSun className="swap-on w-6 h-6 text-yellow-500" />
            </label>
          </div>
          {
            !user ? (<>
              <NavLink to="/login" className="btn text-white bg-main-color border-none mr-3">Login</NavLink>
              <NavLink to="/register" className="btn text-white border-none bg-main-color">Register</NavLink>
            </>)
              : (
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <img className="w-10 rounded-full" src={user.photoURL} alt="User Avatar" />
                </div>
                <ul className="menu menu-sm dropdown-content absolute bg-lime-300 rounded-box mt-3 w-96 h-auto shadow-lg text-[#034833]">
                  {/* User Name Display */}
                  <li className="text-center py-4">
                    <a className="text-white text-xl">{user.displayName}</a>
                  </li>
                  {/* Logout and Update Profile */}
                  <li className="flex flex-col items-center gap-2">
                    <button 
                      onClick={handleLogOut} 
                      className="px-4 py-2 text-white text-center bg-red-600 hover:bg-red-700 rounded-md w-full">
                      Logout
                    </button>
                    <Link 
                      to="/updateProfile" 
                      className="btn btn-sm text-[#034833] bg-[#83cd20] hover:bg-[#72a120] w-full mt-3 rounded-md">
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
export default Navbar