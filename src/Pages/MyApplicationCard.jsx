import React from 'react';

const MyApplicationCard = ({ visaData, application }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <img src={visaData.countryImage} alt="Country" className="w-full h-48 object-cover" />
      <h3 className="text-2xl font-bold">{visaData.countryName}</h3>
      <p><strong>Visa Type:</strong> {visaData.visaType}</p>
      <p><strong>Processing Time:</strong> {visaData.processingTime}</p>
      <p><strong>Fee:</strong> {visaData.fee}</p>
      <p><strong>Validity:</strong> {visaData.validity}</p>
      <p><strong>Application Method:</strong> {visaData.applicationMethod}</p>
      <p><strong>Applied Date:</strong> {application.appliedDate}</p>
      <p><strong>Applicant Name:</strong> {application.firstName} {application.lastName}</p>
      <p><strong>Email:</strong> {application.email}</p>
      <button className="btn btn-danger mt-4">Cancel</button>
    </div>
  );
};

export default MyApplicationCard;
