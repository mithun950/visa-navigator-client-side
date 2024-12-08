import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const VisaDetails = () => {

const location = useLocation();
    const {visaData} = location.state || {};
    console.log(visaData)


//   const { countryName, visaType, processingTime, fee, validity, applicationMethod } = visaData;

  const [isModalOpen, setIsModalOpen] = useState(false);
   const {user} = useContext(AuthContext)
  const handleApplyClick = () => {
    setIsModalOpen(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const appliedDate = new Date().toISOString().split("T")[0]; // Current date
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

    console.log(applicationData); 

    fetch("http://localhost:3000/applications",{
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(applicationData),
    })
    .then(res => res.json())
    .then(data => 
        {console.log( 'apply korse',data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Application submit successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
    })
     form.reset();
    setIsModalOpen(false);
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6">

        <h2 className="text-center text-3xl pb-20 font-bold">Apply for the  <span className="text-blue-500">{visaData.countryName} </span> visa</h2>
        
        <div className="flex justify-center">
          <button
            className="btn btn-primary"
            onClick={handleApplyClick}
          >
            Apply for  the  {visaData.countryName} Visa
          </button>

        </div>
        <div className="mx-auto text-center"> 
            <Link to="/my-visa-applications" state={{visaData}} className="btn btn-primary mt-5">Go to My Application</Link>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Apply for {visaData.countryName} Visa</h2>
            <form onSubmit={handleSubmitForm}>
              <div className="mb-4">
               
                <input
                  type="email"
                  value={user.email}
                  name="email"
                 
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  name="visaId"
                  value={visaData._id}
                  className="input input-bordered w-full"
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Applied Date</label>
                <input
                  type="text"
                  name="appliedDate"
                  value={new Date().toISOString().split("T")[0]}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="mb-4">
                <label className="block font-semibold mb-2">Fee</label>
                <input
                  type="text"
                  name="fee"
                  value={visaData.fee}
                  readOnly
                  className="input input-bordered w-full"
                />
              </div>
              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
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
