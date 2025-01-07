import { useEffect, useState } from "react";
import { FaRegEye, FaRegClock, FaDollarSign, FaRegCheckCircle, FaRegFileAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllVisas = () => {
    const [allVisa, setAllVisa] = useState([]);
    const [filter, setFilter] = useState("All");
    const [currentPage, setCurrentPage] = useState(1);
    const visasPerPage = 9;

    useEffect(() => {
        fetch('https://visa-navigator-backend-swart.vercel.app/visa')
            .then(res => res.json())
            .then(data => setAllVisa(data));
    }, []);

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
        setCurrentPage(1); 
    };

    const filteredVisa = allVisa.filter(visa => filter === "All" || visa.visaType === filter);

    // Calculate pagination
    const totalVisas = filteredVisa.length;
    const totalPages = Math.ceil(totalVisas / visasPerPage);
    const startIndex = (currentPage - 1) * visasPerPage;
    const currentVisas = filteredVisa.slice(startIndex, startIndex + visasPerPage);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="w-11/12 mx-auto">
            {/*  Dropdown  part */}
            <div className="mb-5 text-center pt-32 pb-8">
                <select onChange={handleFilterChange} className="p-2 border px-6 py-4 bg-main-color text-white font-bold rounded">
                    <option value="All">All Visa Types</option>
                    <option value="Tourist Visa">Tourist Visa</option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Official Visa">Official Visa</option>
                </select>
            </div>

            {/* Visa Cards */}
            <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {currentVisas.map(visaData => (
                    <div key={visaData._id} className="relative bg-white shadow-lg p-5 rounded-lg overflow-hidden flex flex-col items-stretch group">
                       
                        {/* Image with hover effect */}
                        <div className="relative">
                            <img
                                src={visaData.countryImage}
                                alt=""
                                className="w-full h-40 object-cover rounded-md mb-4 transition-all duration-300 group-hover:blur-sm group-hover:scale-105"
                                style={{ boxShadow: "0 4px 15px lime" }}
                            />
                            
                            {/* See Details Button */}
                            <Link
                                to="/visaDetails"
                                state={{ visaData }}
                                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-main-color text-white py-2 px-4 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:bottom-12 transition-all duration-300"
                            >
                                See Details
                            </Link>
                        </div>
                        <div className="p-4 flex flex-col space-y-2">
                            <h3 className="text-xl font-semibold text-gray-800">{visaData.countryName}</h3>
                            <div className="text-sm text-gray-500 flex items-center">
                                <FaRegFileAlt className="mr-2" />
                                <span className="font-bold">Visa Type:</span> {visaData.visaType}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                                <FaRegClock className="mr-2" />
                                <span className="font-bold">Processing Time:</span> {visaData.processingTime}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                                <FaDollarSign className="mr-2" />
                                <span className="font-bold">Fee:</span> {visaData.fee}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                                <FaRegCheckCircle className="mr-2" />
                                <span className="font-bold">Validity:</span> {visaData.validity}
                            </div>
                            <div className="text-sm text-gray-500 flex items-center">
                                <FaRegFileAlt className="mr-2" />
                                <span className="font-bold">Application Method:</span> {visaData.applicationMethod}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="mt-8 flex justify-center items-center space-x-2">
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-main-color text-white' : 'bg-gray-200 text-gray-800'}`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default AllVisas;
