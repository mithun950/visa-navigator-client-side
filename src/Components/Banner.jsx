import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FaPlane, FaPassport, FaGlobe } from "react-icons/fa";
import { div } from "framer-motion/client";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="dark:bg-black">
    <div className="w-11/12 mx-auto mt-16 ">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative h-[500px]">
          <img
            src="https://i.ibb.co.com/M2z4Pr5/japan.jpg"
            alt="Travel Adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <FaPlane className="text-6xl mb-4" />
            <h2 className="text-4xl font-bold">Plan Your Next Adventure</h2>
            <p className="mt-2 max-w-md text-center">
              Explore visa options and travel seamlessly to your favorite destinations worldwide!
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative h-[500px]">
          <img
            src="https://i.ibb.co.com/ZLr3mSn/germany.jpg"
            alt="Visa Applications"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <FaPassport className="text-6xl mb-4" />
            <h2 className="text-4xl font-bold">Easy Visa Applications</h2>
            <p className="mt-2 max-w-md text-center">
              Simplify your visa process with our comprehensive guidance and support.
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative h-[500px]">
          <img
            src="https://i.ibb.co.com/PtWXzqc/usa.jpg"
            alt="Track Your Visa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
            <FaGlobe className="text-6xl mb-4" />
            <h2 className="text-4xl font-bold">Track Your Visa Status</h2>
            <p className="mt-2 max-w-md text-center">
              Stay updated with real-time visa application tracking and notifications.
            </p>
          </div>
        </div>
      </Slider>
    </div>
    </div>
  );
};

export default Banner;
