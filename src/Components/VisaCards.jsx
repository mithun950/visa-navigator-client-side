import React from 'react';
import { FaRegEye, FaRegClock, FaMoneyBillWave, FaCheckCircle, FaPaperPlane, FaRegFileAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VisaCards = ({ visaData }) => {
  const { countryImage, countryName, visaType, processingTime, fee, validity, applicationMethod } = visaData;

  return (
    <div className="relative bg-white p-4 w-11/12 mx-auto shadow-lg rounded-lg overflow-hidden">
      {/* Image Container */}
      <div className="relative group">
        <img
          src={countryImage}
          alt=""
          className="w-full h-48 rounded-lg object-cover transition duration-300 group-hover:blur-sm"
          style={{ boxShadow: "0 4px 15px lime" }}
        />
        {/* See Details Button */}
        <Link
          to="/visaDetails"
          state={{ visaData }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:bottom-12 group-hover:opacity-100 bg-main-color text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-font-color transition-all duration-300"
        >
          <FaRegEye className="mr-2 text-lg" /> See Details
        </Link>
      </div>

      {/* Card Content */}
      <div className="p-6 text-left">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">{countryName}</h3>

        {/*  Container */}
        <div className="flex flex-col gap-y-1 text-sm text-gray-600">
          <div className="flex justify-start items-center whitespace-nowrap">
          <FaRegFileAlt className=" text-gray-500 mr-2" />
            <span className="font-semibold text-gray-800 mr-1">Visa Type:</span>
            <span className="text-gray-700">{visaType}</span>
          </div>
          <div className="flex justify-start items-center whitespace-nowrap">
            <FaRegClock className="text-gray-500 mr-2" />
            <span className="font-semibold text-gray-800 mr-1">Processing Time:</span>
            <span className="text-gray-700">{processingTime}</span>
          </div>
          <div className="flex justify-start items-center whitespace-nowrap">
            <FaMoneyBillWave className="text-gray-500 mr-2" />
            <span className="font-semibold text-gray-800 mr-1">Fee:</span>
            <span className="text-gray-700">{fee}</span>
          </div>
          <div className="flex justify-start items-center whitespace-nowrap">
            <FaCheckCircle className="text-gray-500 mr-2" />
            <span className="font-semibold text-gray-800 mr-1">Validity:</span>
            <span className="text-gray-700">{validity}</span>
          </div>
          <div className="flex justify-start items-center whitespace-nowrap">
            <FaPaperPlane className="text-gray-500 mr-2" />
            <span className="font-semibold text-gray-800 mr-1">Application Method:</span>
            <span className="text-gray-700">{applicationMethod}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaCards;
