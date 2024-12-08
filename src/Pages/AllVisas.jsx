import { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllVisas = () => {
    const [allVisa, setAllVisa] = useState([]);
    const [filter, setFilter] = useState("All");

    useEffect(() => {
        fetch('http://localhost:3000/visa')
            .then(res => res.json())
            .then(data => setAllVisa(data));
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredVisa = allVisa.filter(visa => filter === "All" || visa.visaType === filter);

    return (
        <div className="w-11/12 mx-auto mt-10">
            <div className="mb-5 text-center">
                <select onChange={handleFilterChange} className="p-2 border bg-blue-500 text-white font-bold rounded">
                    <option  value="All">All Visa Types</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Official Visa">Official Visa</option>
                    
                </select>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    filteredVisa.map(visaData => (
                        <div key={visaData._id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src={visaData.countryImage}
                                alt=""
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-gray-800">{visaData.countryName}</h3>
                                <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Visa_Type: </span> {visaData.visaType}</p>
                                <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Processing_Time: </span>{visaData.processingTime}</p>
                                <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Fee: </span> {visaData.fee}</p>
                                <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Validity: </span>{visaData.validity}</p>
                                <p className="mt-2 text-sm text-gray-500"><span className='font-bold'>Application_Method: </span> {visaData.applicationMethod}</p>
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
                    ))
                }
            </div>
        </div>
    );
};

export default AllVisas;
