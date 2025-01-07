import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import { FaPlane, FaPassport, FaGlobe } from "react-icons/fa";

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

  // Slide Data
  const slides = [
    {
      id: 1,
      imgSrc: "https://i.ibb.co/M2z4Pr5/japan.jpg",
      icon: <FaPlane className="text-6xl mb-4" />,
      title: "Plan Your Next Adventure",
      description: "Explore visa options and travel seamlessly to your favorite destinations worldwide!",
    },
    {
      id: 2,
      imgSrc: "https://i.ibb.co/ZLr3mSn/germany.jpg",
      icon: <FaPassport className="text-6xl mb-4" />,
      title: "Easy Visa Applications",
      description: "Simplify your visa process with our comprehensive guidance and support.",
    },
    {
      id: 3,
      imgSrc: "https://i.ibb.co/PtWXzqc/usa.jpg",
      icon: <FaGlobe className="text-6xl mb-4" />,
      title: "Track Your Visa Status",
      description: "Stay updated with real-time visa application tracking and notifications.",
    },
  ];

  return (
    <div className="dark:bg-black mt-20">
      <div className="w-full mx-auto">
        <Slider {...settings}>
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-[375px]">
              <img
                src={slide.imgSrc}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
                {slide.icon}
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 max-w-md text-center">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
