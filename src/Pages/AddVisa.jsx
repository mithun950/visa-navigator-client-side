import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth/AuthProvider';

const AddVisa = () => {

  const { user } = useContext(AuthContext);

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const requiredDocuments = form.requiredDocuments.value.split(',').map((doc) => doc.trim());
    const description = form.description.value;
    const ageRestriction = form.ageRestriction.value;
    const fee = form.fee.value;
    const validity = form.validity.value;
    const applicationMethod = form.applicationMethod.value;
    const email = user.email;

    const newVisa = {
      countryImage,
      countryName,
      visaType,
      processingTime,
      requiredDocuments,
      description,
      ageRestriction,
      fee,
      validity,
      applicationMethod,
      email,
    };

    console.log(newVisa);

    // Send data to the server
    fetch('http://localhost:3000/visa', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newVisa),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Visa added successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center mt-6">Add Visa</h2>
      <form onSubmit={handleAddVisa}>
        <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 w-10/12 mx-auto p-10 rounded-lg mt-8 shadow-lg">
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Country Image */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="text"
                name="countryImage"
                placeholder="Country Image URL"
                required
              />
            </div>

            {/* Country Name */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="text"
                name="countryName"
                placeholder="Country Name"
                required
              />
            </div>

            {/* Visa Type */}
            <div>
              <select
                className="border w-full text-center rounded-lg py-2 px-3 mt-2"
                name="visaType"
                placeholder="Visa type"
                required
              >
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>

            {/* Processing Time */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                required
              />
            </div>

            {/* Required Documents */}
            <div>
              <label className="block font-medium mt-4">Required Documents</label>
              <div className="grid md:grid-cols-3 justify-center gap-4 mt-2">
                <label>
                  <input type="checkbox" name="requiredDocuments" value="Valid passport" />
                  <span className="ml-2">Valid passport</span>
                </label>
                <label>
                  <input type="checkbox" name="requiredDocuments" value="Visa application form" />
                  <span className="ml-2">Visa application form</span>
                </label>
                <label>
                  <input type="checkbox" name="requiredDocuments" value="Recent passport-sized photograph" />
                  <span className="ml-2">Recent passport-sized photograph</span>
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <textarea
                className="border w-full text-center rounded-lg py-3 mt-4"
                name="description"
                placeholder="Description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Age Restriction */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="number"
                name="ageRestriction"
                placeholder="Age Restriction (Minimum age 18 years)"
                required
              />
            </div>

            {/* Fee */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="number"
                name="fee"
                placeholder="Fee (Taka)"
                required
              />
            </div>

            {/* Validity */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="text"
                name="validity"
                placeholder="Validity"
                required
              />
            </div>

            {/* Application Method */}
            <div>
              <input
                className="border w-full text-center rounded-lg py-3 mt-4"
                type="text"
                name="applicationMethod"
                placeholder="Application Method"
                required
              />
            </div>

          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <input
              type="submit"
              value="Add Visa"
              className="btn btn-block  bg-blue-600 hover:bg-blue-500 text-white"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddVisa;
