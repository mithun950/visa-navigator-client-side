import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";
import { FaClock, FaMoneyBillWave, FaCalendarAlt, FaPassport } from "react-icons/fa";

const VisaDetails = () => {
  const location = useLocation();
  const { visaData } = location.state || {};
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user } = useContext(AuthContext);

  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = new Date().toISOString().split("T")[0];
    const feeAmount = form.fee.value;
    const visaId = form.visaId.value;

    const applicationData = {
      email,
      firstName,
      lastName,
      appliedDate,
      fee: feeAmount,
      visaId: visaId,
    };

    fetch("https://visa-navigator-backend-swart.vercel.app/applications", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicationData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Application submitted successfully.",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
    form.reset();
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 pt-28 min-h-screen">
      <div className="max-w-5xl mx-auto
       shadow-lg rounded-lg p-6">
        <h2 className="text-center text-3xl font-bold text-[#034833] mb-10">
          {visaData?.countryName} Visa Details
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <img
              src={visaData?.countryImage}
              alt={visaData?.countryName}
              className="rounded-lg shadow-lg w-full md:w-96"
            />
          </div>
          <div className="text-[#034833] space-y-4">
            <p className="font-semibold flex items-center">
              <FaPassport className="text-[#83cd20] mr-2" />
              <span className="text-[#83cd20] font-bold">Visa Type:</span>{" "}
              {visaData?.visaType}
            </p>
            <p className="font-semibold flex items-center">
              <FaClock className="text-[#83cd20] mr-2" />
              <span className="text-[#83cd20] font-bold">Processing Time:</span>{" "}
              {visaData?.processingTime}
            </p>
            <p className="font-semibold flex items-center">
              <FaMoneyBillWave className="text-[#83cd20] mr-2" />
              <span className="text-[#83cd20] font-bold">Fee:</span>{" "}
              {visaData?.fee}
            </p>
            <p className="font-semibold flex items-center">
              <FaCalendarAlt className="text-[#83cd20] mr-2" />
              <span className="text-[#83cd20] font-bold">Validity:</span>{" "}
              {visaData?.validity}
            </p>
            <p className="font-semibold">
              <span className="text-[#83cd20] font-bold">Application Method:</span>{" "}
              {visaData?.applicationMethod}
            </p>
          </div>
        </div>
        <div className="text-[#034833] mt-8 space-y-4">
          <h3 className="text-xl font-bold">Description:</h3>
          <p>{visaData?.description}</p>
        </div>
        <div className="flex justify-center mt-8">
          <button
            className="bg-[#83cd20] text-white font-bold py-2 px-6 rounded hover:bg-[#034833] transition duration-300"
            onClick={handleApplyClick}
          >
            Apply for {visaData?.countryName} Visa
          </button>
        </div>
        <div className="text-center mt-5">
          <Link
            to="/my-visa-applications"
            className="text-[#83cd20] hover:text-[#034833] font-bold"
          >
            Go to My Applications
          </Link>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-[#034833] mb-4">
              Apply for {visaData?.countryName} Visa
            </h2>
            <form onSubmit={handleSubmitForm}>
              <input
                type="email"
                name="email"
                value={user.email}
                readOnly
                className="input input-bordered w-full mb-4"
              />
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                className="input input-bordered w-full mb-4"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                className="input input-bordered w-full mb-4"
                required
              />
              <input
                type="text"
                name="visaId"
                value={visaData?._id}
                readOnly
                className="input input-bordered w-full mb-4"
              />
              <input
                type="text"
                name="appliedDate"
                value={new Date().toISOString().split("T")[0]}
                readOnly
                className="input input-bordered w-full mb-4"
              />
              <input
                type="text"
                name="fee"
                value={visaData?.fee}
                readOnly
                className="input input-bordered w-full mb-4"
              />
              <div className="flex justify-end space-x-4">
                <button
                  type="button"
                  className="bg-gray-300 text-gray-700 font-bold py-2 px-4 rounded"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#83cd20] text-white font-bold py-2 px-4 rounded hover:bg-[#034833] transition duration-300"
                >
                  Apply
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default VisaDetails;
