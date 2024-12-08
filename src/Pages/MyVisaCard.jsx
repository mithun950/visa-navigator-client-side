import React, { useState } from 'react';

const MyVisaCard = ({ data, personalData, setPersonalData }) => {
  const { _id, countryName, countryImage, visaType, processingTime, fee, validity, applicationMethod } = data;
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this visa?");
    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3000/visa/${_id}`, { method: "DELETE" });
        if (response.ok) {
          setPersonalData(personalData.filter((item) => item._id !== _id));
        }
      } catch (error) {
        console.error("Error deleting visa:", error);
      }
    }
  };

  const handleUpdate = async () => {
    try {
      const response = await fetch(`http://localhost:3000/visa/${_id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error updating visa:", error);
    }
  };

  return (
    <>
   
    <div className="card border mt-16 p-4 text-center">
      <img src={countryImage} alt={countryName} className="w-full h-40 object-cover rounded-lg" />
      <h2 className="text-lg font-bold mt-2">{countryName}</h2>
      <p>Visa Type: {visaType}</p>
      <p>Processing Time: {processingTime}</p>
      <p>Fee: {fee} BDT</p>
      <p>Validity: {validity}</p>
      <p>Application Method: {applicationMethod}</p>
      <div className="mt-4 mx-auto ">
        <button className="btn btn-primary mr-2" onClick={() => setShowModal(true)}>Update</button>
        <button className="btn btn-danger" onClick={handleDelete}>Delete</button>
      </div>

    
      {showModal && (


        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4">Update Visa</h3>
            <form>
              <input

                type="text"
                placeholder="Country Name"
             value={formData.countryName}
                onChange={(e) => setFormData({ ...formData, countryName: e.target.value })}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Visa Type"
            value={formData.visaType}
                onChange={(e) => setFormData({ ...formData, visaType: e.target.value })}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Processing Time"
             value={formData.processingTime}
                onChange={(e) => setFormData({ ...formData, processingTime: e.target.value })}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="number"
                placeholder="Fee"
            value={formData.fee}
                onChange={(e) => setFormData({ ...formData, fee: e.target.value })}
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Validity"
                value={formData.validity}
                onChange={(e) => setFormData({ ...formData, validity: e.target.value })}
            className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Application Method"
                value={formData.applicationMethod}
                onChange={(e) => setFormData({ ...formData, applicationMethod: e.target.value })}
                className="input input-bordered w-full mb-2"
              />
              <div className="mt-4 flex justify-end">
                <button type="button" className="btn btn-success mr-2" onClick={handleUpdate}>
                  Save
                </button>
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
    </>
  );
};

export default MyVisaCard;
