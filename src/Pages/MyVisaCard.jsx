import React, { useState } from 'react';

const MyVisaCard = ({ data, personalData, setPersonalData }) => {
  const {
    _id,
    countryName,
    countryImage,
    visaType,
    processingTime,
    fee,
    validity,
    applicationMethod,
  } = data;

  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(data);

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this visa?"
    );
    if (confirmDelete) {
      try {
        const response = await fetch(
          `https://visa-navigator-backend-swart.vercel.app/visa/${_id}`,
          { method: "DELETE" }
        );
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
      const response = await fetch(
        `https://visa-navigator-backend-swart.vercel.app/visa/${_id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setShowModal(false);
      }
    } catch (error) {
      console.error("Error updating visa:", error);
    }
  };

  return (
    <>
      <div className=" w-11/12 mx-auto ">
      <h2 className="text-3xl pt-28 font-bold text-center mb-8 text-[#034833]">
        My Added Visa
      </h2>
        <div className="overflow-x-auto lg:overflow-x-hidden">
        <table className="table-auto border-collapse border border-gray-300 bg-[#f9fdf8] rounded-lg shadow-lg w-full lg:w-full">
        <thead>
              <tr className="bg-[#83cd20] text-white">
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Image</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Country</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Visa Type</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Processing Time</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Fee (BDT)</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Validity</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Application Method</th>
                <th className="border border-gray-300 px-4 py-2 text-[#034833]">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">
                  <img
                    src={countryImage}
                    alt={countryName}
                    className="w-16 h-16 object-cover rounded-lg mx-auto"
                  />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#034833] font-semibold">
                  {countryName}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#034833]">
                  {visaType}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#034833]">
                  {processingTime}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#034833]">
                  {fee}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#034833]">
                  {validity}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center text-[#034833]">
                  {applicationMethod}
                </td>
                <td className="border border-gray-300 px-4 py-2 flex justify-center items-center space-x-2">
                  <button
                    className="btn bg-[#83cd20] text-white hover:bg-[#71b818] btn-sm"
                    onClick={() => setShowModal(true)}
                  >
                    Update
                  </button>
                  <button
                    className="btn bg-red-600 text-white hover:bg-red-500 btn-sm"
                    onClick={handleDelete}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
            <h3 className="text-xl font-bold mb-4 text-[#034833]">Update Visa</h3>
            <form>
              <input
                type="text"
                placeholder="Country Name"
                value={formData.countryName}
                onChange={(e) =>
                  setFormData({ ...formData, countryName: e.target.value })
                }
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Visa Type"
                value={formData.visaType}
                onChange={(e) =>
                  setFormData({ ...formData, visaType: e.target.value })
                }
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Processing Time"
                value={formData.processingTime}
                onChange={(e) =>
                  setFormData({ ...formData, processingTime: e.target.value })
                }
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
                onChange={(e) =>
                  setFormData({ ...formData, validity: e.target.value })
                }
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Application Method"
                value={formData.applicationMethod}
                onChange={(e) =>
                  setFormData({ ...formData, applicationMethod: e.target.value })
                }
                className="input input-bordered w-full mb-2"
              />
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="btn bg-[#83cd20] text-white hover:bg-[#71b818] mr-2"
                  onClick={handleUpdate}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="btn bg-gray-400 text-white hover:bg-gray-500"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default MyVisaCard;
