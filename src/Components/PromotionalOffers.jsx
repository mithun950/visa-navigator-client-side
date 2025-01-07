import React from "react";
import { Link } from "react-router-dom";

const PromotionalOffers = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-4xl font-bold text-center text-[#034833] mb-8">
        Special Promotional Offers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Offer 1 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#034833] mb-4">Get 10% Off on Tourist Visas</h3>
          <p className="text-[#6B7280]">
            Apply now for a tourist visa and get an exclusive 10% discount on processing fees.
          </p>
          <Link to={"/all-visas"} className="text-white mt-4 hover:text-[#83cd20] btn bg-main-color">
            Claim Offer
          </Link>
        </div>
        {/* Offer 2 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#034833] mb-4">Student Visa with Free Consultation</h3>
          <p className="text-[#6B7280]">
            Get free consultation when you apply for a student visa through us. Limited time offer.
          </p>
          <Link to={"/all-visas"} className="text-white mt-4 hover:text-[#83cd20] btn bg-main-color">
            Claim Offer
          </Link>
        </div>
        {/* Offer 3 */}
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-[#034833] mb-4">Free Visa Document Verification</h3>
          <p className="text-[#6B7280]">
            Free document verification service when you apply for any work or tourist visa.
          </p>
          <Link to={"/all-visas"} className="text-white mt-4 hover:text-[#83cd20] btn bg-main-color">
            Claim Offer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromotionalOffers;
