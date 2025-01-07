import { useContext, useState } from 'react';
import { motion } from 'framer-motion'; // Framer Motion ইমপোর্ট করা হয়েছে
import Swal from 'sweetalert2';
import { AuthContext } from '../Auth/AuthProvider';
import { FaImage, FaPassport, FaFileAlt } from 'react-icons/fa'; // React Icons

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [requireDoc, setRequireDoc] = useState([]);

  const handleRequired = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setRequireDoc((pre) => [...pre, value]);
    } else {
      setRequireDoc((pre) => pre.filter((doc) => doc !== value));
    }
  };

  const handleAddVisa = (e) => {
    e.preventDefault();
    const form = e.target;
    const countryImage = form.countryImage.value;
    const countryName = form.countryName.value;
    const visaType = form.visaType.value;
    const processingTime = form.processingTime.value;
    const requiredDocuments = requireDoc;
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
    fetch('https://visa-navigator-backend-swart.vercel.app/visa', {
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
    <div className=" w-11/12 mx-auto flex flex-col lg:flex-row items-center px-4 py-8  gap-8 mt-20">
      {/* Image Section */}
      <motion.div
        className="lg:flex-1 flex justify-center overflow-hidden w-full"
        initial={{ opacity: 0, x: '-100%' }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          className="w-full h-full lg:h-full object-cover rounded-lg"
          src="https://wp.rrdevs.net/routex/wp-content/uploads/2024/07/contact-left-img.png"
          alt="Flying vector"
        />
      </motion.div>

      {/* Form Section */}
      
      <div className="flex flex-col items-center w-full lg:w-7/12 bg-lime-100 p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-font-color mb-2">Add Your Visa Details</h2>
        <p className="text-center text-gray-600 mb-6">
          Please fill out the form below to add your visa details.
        </p>
        <form onSubmit={handleAddVisa} className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country Image */}
            <div className="flex items-center border p-3 rounded-lg">
              <FaImage className="text-blue-600 mr-3" />
              <input
                className="w-full focus:outline-none"
                type="text"
                name="countryImage"
                placeholder="Country Image URL"
                required
              />
            </div>

            {/* Country Name */}
            <div className="flex items-center border p-3 rounded-lg">
              <FaPassport className="text-blue-600 mr-3" />
              <input
                className="w-full "
                type="text"
                name="countryName"
                placeholder="Country Name"
                required
              />
            </div>

            {/* Visa Type */}
            <div>
              <select
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                name="visaType"
                required
              >
                <option value="Tourist Visa">Tourist Visa</option>
                <option value="Student Visa">Student Visa</option>
                <option value="Official Visa">Official Visa</option>
              </select>
            </div>

            {/* Processing Time */}
            <div className="flex items-center border p-3 rounded-lg">
              <FaFileAlt className="text-blue-600 mr-3" />
              <input
                className="w-full focus:outline-none"
                type="text"
                name="processingTime"
                placeholder="Processing Time"
                required
              />
            </div>

            {/* Required Documents */}
            <div className="col-span-2">
              <label className="block font-medium text-gray-700">Required Documents</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {['Valid passport', 'Visa application form', 'Recent passport-sized photograph'].map((doc, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      onChange={handleRequired}
                      type="checkbox"
                      value={doc}
                      className="mr-2"
                    />
                    <span>{doc}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="col-span-2">
              <textarea
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                name="description"
                placeholder="Description"
                rows="4"
                required
              ></textarea>
            </div>

            {/* Age Restriction */}
            <div>
              <input
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="number"
                name="ageRestriction"
                placeholder="Age Restriction (Minimum age 18 years)"
                required
              />
            </div>

            {/* Fee */}
            <div>
              <input
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="number"
                name="fee"
                placeholder="Fee (Taka)"
                required
              />
            </div>

            {/* Validity */}
            <div>
              <input
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                name="validity"
                placeholder="Validity"
                required
              />
            </div>

            {/* Application Method */}
            <div>
              <input
                className="border w-full p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                name="applicationMethod"
                placeholder="Application Method"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="w-6/12  p-3 bg-main-color text-white font-bold rounded-lg hover:bg-font-color focus:outline-none focus:ring-2 focus:ring-blue-400"
              >
                Add Visa
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddVisa;
