import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip as ReactTooltip } from "react-tooltip";


const VisaAnimated = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-blue-700 mb-6">
          <span>
            <Typewriter
              words={[
                "Simplify Your Visa Journey",
                "Explore the World Effortlessly",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              typeSpeed={80}
              deleteSpeed={60}
              delaySpeed={1200}
            />
          </span>
        </h2>

        {/* Description with Tooltip */}
        <p
          className="text-lg text-gray-700 mb-8"
          data-tip="Get tailored visa options for your next adventure!"
        >
          Our platform provides the most accurate and up-to-date visa information to help you make informed decisions.
        </p>

        {/* Call-to-Action Buttons with Tooltip */}
        <div className="flex justify-center space-x-6">
          <button
            className="btn btn-primary"
            data-tip="Browse all available visa categories and requirements"
          >
            Explore All Visas
          </button>
          <button
            className="btn btn-secondary"
            data-tip="Start your visa application process now"
          >
            Apply Now
          </button>
        </div>

        {/* ReactTooltip Initialization */}
        <ReactTooltip place="top" type="info" effect="solid" />
      </div>
    </section>
  );
};

export default VisaAnimated;
