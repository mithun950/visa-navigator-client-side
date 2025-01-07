import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_npsypas",  
        "template_c6q1u0w",  
        e.target,           
        "JwDMzoBTUxWEmgUbM"       
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <motion.div
      className="w-11/12 mx-auto my-12"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold text-center text-[#034833] mb-8 pt-20">Contact Us</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Form Section */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#034833] mb-4">Let Your Wanderlust Guide You</h3>
          {submitted && (
            <div className="bg-green-500 text-white p-4 rounded-lg mb-4">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg font-semibold text-[#034833]">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border rounded-lg border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-lg font-semibold text-[#034833]">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border rounded-lg border-gray-300"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-lg font-semibold text-[#034833]">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                required
                className="w-full p-3 mt-2 border rounded-lg border-gray-300"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-[#034833] text-white rounded-lg hover:bg-[#83cd20] transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="p-6 bg-[#F1F6F9] rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#034833] mb-4">Our Contact Info</h3>

          {/* Hotline Numbers */}
          <div className="flex items-center mb-6">
            <FaPhoneAlt className="text-2xl text-[#034833] mr-4" />
            <a href="tel:+880123456789" className="text-lg text-[#034833] hover:text-[#83cd20]">
              Hotline: +880 123 456 789
            </a>
          </div>

          {/* Email */}
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-2xl text-[#034833] mr-4" />
            <a href="mailto:contact@company.com" className="text-lg text-[#034833] hover:text-[#83cd20]">
              Email: visanavigator@gmail.com
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-2xl text-[#034833] mr-4" />
            <a
              href="https://www.google.com/maps?q=123,+Gulshan+Street,+Dhaka,+Bangladesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-[#034833] hover:text-[#83cd20]"
            >
              123, Gulshan, Dhaka, Bangladesh
            </a>
          </div>

          {/* Map */}
          <h4 className="text-xl font-semibold text-[#034833] mb-4">Find Us Here</h4>
          <div className="w-full h-64 mb-6">
            <iframe src="https://www.google.com/maps/d/embed?mid=1vPmtJf7zJcuJdASqoUOleIlBF3QZDiA&ehbc=2E312F" width="520" height="260"></iframe>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-[#034833] hover:text-[#83cd20]" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-[#034833] hover:text-[#83cd20]" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-[#034833] hover:text-[#83cd20]" />
            </a>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-[#034833] mb-4">Our Office</h3>
        <img
          src="https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_1280.jpg"
          alt="Office Image"
          className="mx-auto w-full h-[350px] object-cover rounded-lg shadow-lg"
        />
      </div>
    </motion.div>
  );
};

export default ContactUs;
