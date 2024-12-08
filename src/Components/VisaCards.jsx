import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const VisaCards = ({ visaData }) => {

    const {countryImage,countryName,visaType,processingTime,fee,validity,applicationMethod}= visaData
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={countryImage}
        alt=""
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800">{countryName}</h3>
        <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Visa_Type: </span> {visaType}</p>
        <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Processing_Time: </span>{processingTime}</p>
        <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Fee: </span> {fee}</p>
        <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Validity: </span>{validity}</p>
        <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Application_Method: </span> {applicationMethod}</p>
        <div className='flex justify-center'>
        <Link to="/visaDetails"  
        state={{visaData}}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center"
        >
          <FaRegEye className="mr-2" /> See Details
        </Link>
        </div>
       
      </div>
    </div>
  );
};


export default VisaCards;
