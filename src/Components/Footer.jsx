import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-font-color text-main-color p-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Services Section */}
       <img 
       
       className='w-52 '
       src="https://worldpassports.org/wp-content/uploads/2024/02/tourist-visa.png" alt="" />
        
        {/* Company Section */}
        <nav>
          <h6 className="footer-title text-xl font-bold mb-4">Company</h6>
          <Link to="/about" className="link link-hover text-white hover:text-white">About us</Link>
          <Link to="/contactUs" className="link link-hover text-[#034833] hover:text-white">Contact</Link>
        </nav>
        
        {/* Legal Section */}
        <nav>
          <h6 className="footer-title text-xl font-bold mb-4">Legal</h6>
          <Link to="/contactUs" className="link link-hover text-white hover:text-white">Hotline Number</Link>
          <Link to="/privacy-policy" className="link link-hover text-[#034833] hover:text-white">Privacy policy</Link>
        </nav>
        
        {/* Newsletter Section */}
        <form>
          <h6 className="footer-title text-xl font-bold mb-4">Newsletter</h6>
          <fieldset className="form-control w-full sm:w-80">
            <label className="label text-white">
              <span className="label-text text-white">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered join-item text-[#034833] placeholder:text-[#034833]"
                required
              />
              <button className="btn btn-primary join-item bg-[#83cd20] hover:bg-[#72a120] text-white">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
      
      {/* Footer Bottom */}
      <div className="lg:mt-8 mt-16 text-center text-[#034833]">
        <p>Copyright © {new Date().getFullYear()} - All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
