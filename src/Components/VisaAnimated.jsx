import React from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { Tooltip as ReactTooltip } from "react-tooltip";

const VisaAnimated = () => {
  return (
    <section className="mt-8 mb-8 py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#034833] mb-6">
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
          className="text-lg text-[#034833] mb-8"
          data-tip="Get tailored visa options for your next adventure!"
        >
          Our platform provides the most accurate and up-to-date visa information to help you make informed decisions.
        </p>

        {/* Call-to-Action Buttons with Tooltip */}
        <div className="flex justify-center space-x-6">
          <Link to={"/all-visas"}
            className="btn bg-[#83cd20] hover:bg-[#72a120] text-white"
            data-tip="Browse all available visa categories and requirements"
          >
            Explore All Visas
          </Link>
          
        </div>

        {/* ReactTooltip Initialization */}
        <ReactTooltip place="top" type="info" effect="solid" />
      </div>
    </section>
  );
};

export default VisaAnimated;
