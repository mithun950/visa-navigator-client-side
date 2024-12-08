import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar";
import LatestVisa from "../LatestVisa";
import PopularDestiny from "../PopularDestiny";
import VisaAnimated from "../VisaAnimated";
import Footer from "../Footer";

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
        <div className={`${isHome ? "dark:bg-black": ""}`}>
      <header>
        <Navbar onToggle={handleToggle}></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>

      {isHome && <LatestVisa></LatestVisa>}
      {isHome && <PopularDestiny></PopularDestiny>}
      {isHome && <VisaAnimated></VisaAnimated>}

      <footer>
        <Footer></Footer>
      </footer>
      </div>
    </div>
  );
};

export default MainLayouts;
