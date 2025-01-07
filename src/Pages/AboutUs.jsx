import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Marquee from "react-fast-marquee";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

const AboutUs = () => {
  const [showScrollBtn, setShowScrollBtn] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollBtn(true);
    } else {
      setShowScrollBtn(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-11/12 mx-auto">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-[#034833] mb-4 pt-32">About Visa Navigator</h1>
        <p className="text-gray-600 text-lg">
          We simplify your journey by providing reliable, fast, and efficient visa services.
        </p>
      </motion.div>

      {/* Mission, Vision, and Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Mission */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-[#034833] mb-2">Our Mission</h2>
          <p className="text-gray-600">
            To make travel easier and more accessible by providing affordable and trustworthy visa services.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-[#034833] mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To become the top visa service provider globally, helping people reach their dream destinations.
          </p>
        </motion.div>

        {/* Services */}
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-[#034833] mb-2">Our Services</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Tourist Visa</li>
            <li>Student Visa</li>
            <li>Official Visa</li>
            <li>Visa Consultation</li>
          </ul>
        </motion.div>
      </div>

      {/* Our Journey */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl font-bold text-[#034833] mb-2">Our Journey</h2>
          <p className="text-gray-600">
            Established in 2005, Visa Navigator has served over 10,000 clients with exceptional service and a 95% success rate.
          </p>
        </motion.div>
        <motion.div
          className="bg-green-100 rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://img.freepik.com/free-vector/travel-time-logo-banner-with-passport-plane_1308-88168.jpg?t=st=1736221482~exp=1736225082~hmac=04d8c392d6a97c50be8d957ece4a42171706ab76a6c8b901181c4497dfde6233&w=740"
            alt="Our Journey"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Why Choose Us? */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="bg-green-100 rounded-lg shadow-lg overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://img.freepik.com/free-photo/medium-shot-people-travel-agency_52683-136434.jpg?t=st=1736221270~exp=1736224870~hmac=5abb66c736db1ab42aea1eaa6130cc5ab9da09b8d6c882ead38e073e6fcc722b&w=826"
            alt="Why Choose Us"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition"
          whileHover={{ scale: 1.05 }}
        >
          <h2 className="text-2xl font-bold text-[#034833] mb-2">Why Choose Us?</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>95% success rate</li>
            <li>Experienced consultants</li>
            <li>Fast processing guarantee</li>
            <li>24/7 customer support</li>
          </ul>
        </motion.div>
      </div>

      {/* Client Images Marquee */}
      <div className="my-12">
        <h2 className="text-3xl font-bold text-center text-[#034833] mb-8">Our Clients</h2>
        <Marquee speed={50} className="space-x-6">
          <motion.img
            src="https://img.freepik.com/free-photo/portrait-young-woman-with-passport_1258-48218.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
            alt="Client 1"
            className="h-40 ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/young-man-holding-clipboard-with-thumb-up-t-shirt-hat-looking-confident-front-view_176474-91903.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
            alt="Client 2"
            className="h-40  ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/smiling-young-handsome-curly-traveler-man-holding-wallet-airplane-tickets-isolated-pink-wall-with-copy-space_141793-78998.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
            alt="Client 3"
            className="h-40 ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/front-view-woman-holding-plane-tickets-passport-giving-thumbs-up_23-2148434369.jpg?t=st=1736221736~exp=1736225336~hmac=299f121fee2c6511336380f1c78cd4181014dd3b5a45989106af63011a5e5019&w=900"
            alt="Client 4"
            className="h-40 ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/young-handsome-man-doing-gesture_839833-2648.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
            alt="Client 5"
            className="h-40 ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/pleased-young-brunette-caucasian-woman-holds-paint-brush-isolated-green-background-with-copy-space_141793-70135.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
            alt="Client 5"
            className="h-40 ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
          <motion.img
            src="https://img.freepik.com/free-photo/young-handsome-traveler-man-holding-air-tickets-smiling-cheerfully-with-happy-face-showing-thumbs-up-standing-blue-background_141793-15130.jpg?ga=GA1.1.1206565342.1720956206&semt=ais_hybrid"
            alt="Client 5"
            className="h-40 ml-3 rounded-lg"
            whileHover={{ scale: 1.1 }}
          />
         
        </Marquee>
      </div>

      {/* Testimonials Slider */}
      <div className="my-12">
        <h2 className="text-3xl font-bold text-center text-[#034833] mb-8">What Our Clients Say</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <p className="text-gray-600 italic">
                "Visa Navigator helped me secure my student visa quickly and without hassle. Highly recommended!"
              </p>
              <p className="mt-4 text-[#034833] font-bold">- John Doe</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white rounded-lg shadow-lg text-center">
              <p className="text-gray-600 italic">
                "Excellent service! The team was professional and guided me through every step of the process."
              </p>
              <p className="mt-4 text-[#034833] font-bold">- Jane Smith</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Contact Us Section */}
      <motion.div
        className="my-12 text-center"
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold text-[#034833] mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-4">
          Have any questions? Contact us directly by clicking the button below.
        </p>
        <Link to="/contactUs"
          
          className="inline-block bg-main-color text-white px-6 py-3 rounded-lg shadow-lg hover:bg-font-color transition"
        >
          Contact Us
        </Link>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollBtn && (
        <motion.div
          className="fixed bottom-6 right-6 bg-[#034833] text-white p-4 rounded-full cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={scrollToTop}
        >
          ↑
        </motion.div>
      )}
    </div>
  );
};


export default AboutUs;
