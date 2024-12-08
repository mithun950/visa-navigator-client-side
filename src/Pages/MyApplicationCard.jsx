import React from 'react';

const MyApplicationCard = ({ visaData, application }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <img src={visaData.countryImage} alt="Country" className="w-full h-48 object-cover" />
      <h3 className="text-2xl font-bold">{visaData.countryName}</h3>
      <p><strong className='font-bold'>Visa Type:</strong> {visaData.visaType}</p>
      <p><strong className='font-bold'>Processing Time:</strong> {visaData.processingTime}</p>
      <p><strong className='font-bold'>Fee:</strong> {visaData.fee}</p>
      <p><strong className='font-bold'>Validity:</strong> {visaData.validity}</p>
      <p><strong className='font-bold'>Application Method:</strong> {visaData.applicationMethod}</p>
      <p><strong className='font-bold'>Applied Date:</strong> {application.appliedDate}</p>
      <p><strong className='font-bold'>Applicant Name:</strong> {application.firstName} {application.lastName}</p>
      <p><strong className='font-bold'>Email:</strong> {application.email}</p>
      <button className="btn btn-danger mt-4">Cancel</button>
    </div>
  );
};

export default MyApplicationCard;
