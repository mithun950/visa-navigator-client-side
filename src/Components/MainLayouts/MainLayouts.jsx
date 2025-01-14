import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import LatestVisa from "../LatestVisa";
import PopularDestiny from "../PopularDestiny";
import VisaAnimated from "../VisaAnimated";
import Footer from "../Footer";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import PromotionalOffers from "../PromotionalOffers";
  

const MainLayouts = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";
  
  
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true");

  
  const handleToggle = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
    document.body.classList.toggle("dark", !darkMode);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
        <ToastContainer></ToastContainer>
        <div className={`${isHome ? "dark:bg-black": ""}`}>
      <header>
        <Navbar onToggle={handleToggle}></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      {isHome && <LatestVisa></LatestVisa>}
      {isHome && <PromotionalOffers></PromotionalOffers>}
      {isHome && <VisaAnimated></VisaAnimated>}

      <footer>
        <Footer></Footer>
      </footer>
      </div>
    </div>
  );
};

export default MainLayouts;
