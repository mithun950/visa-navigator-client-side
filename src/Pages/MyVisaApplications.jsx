import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const MyVisaApplications = () => {
  const { user } = useContext(AuthContext);
  const [visaData, setVisaData] = useState([]);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch("https://visa-navigator-backend-swart.vercel.app/visa")
      .then((res) => res.json())
      .then((data) => setVisaData(data));

    fetch("https://visa-navigator-backend-swart.vercel.app/applications")
      .then((res) => res.json())
      .then((data) =>
        setApplications(data.filter((app) => app.email === user.email))
      );
  }, [user.email]);

  const cancelApplication = (applicationId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to cancel this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, cancel it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://visa-navigator-backend-swart.vercel.app/applications/${applicationId}`,
          {
            method: "DELETE",
          }
        ).then(() => {
          setApplications((prevApplications) =>
            prevApplications.filter(
              (application) => application._id !== applicationId
            )
          );
          Swal.fire("Cancelled!", "Your application has been canceled.", "success");
        });
      }
    });
  };

  return (
    <div className="w-11/12 mx-auto py-10 ">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#034833] pt-20">
        My Visa Applications
      </h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-[#83cd20]">
          <thead>
            <tr className="bg-[#83cd20] text-white">
              <th className="border border-[#83cd20] p-4">Country</th>
              <th className="border border-[#83cd20] p-4">Visa Type</th>
              <th className="border border-[#83cd20] p-4">Processing Time</th>
              <th className="border border-[#83cd20] p-4">Fee</th>
              <th className="border border-[#83cd20] p-4">Validity</th>
              <th className="border border-[#83cd20] p-4">Application Date</th>
              <th className="border border-[#83cd20] p-4">Applicant</th>
              <th className="border border-[#83cd20] p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((application) => {
              const visa = visaData.find((v) => v._id === application.visaId);
              return (
                <tr key={application._id} className="text-center">
                  <td className="border border-[#83cd20] p-4">
                    <img
                      src={visa?.countryImage}
                      alt={visa?.countryName}
                      className="w-12 h-12 mx-auto rounded"
                    />
                    <p className="mt-2 text-[#034833] font-bold">
                      {visa?.countryName}
                    </p>
                  </td>
                  <td className="border border-[#83cd20] p-4">{visa?.visaType}</td>
                  <td className="border border-[#83cd20] p-4">
                    {visa?.processingTime}
                  </td>
                  <td className="border border-[#83cd20] p-4">{visa?.fee}</td>
                  <td className="border border-[#83cd20] p-4">{visa?.validity}</td>
                  <td className="border border-[#83cd20] p-4">
                    {application.appliedDate}
                  </td>
                  <td className="border border-[#83cd20] p-4">
                    {application.firstName} {application.lastName}
                    <br />
                    <span className="text-sm text-[#034833]">
                      {application.email}
                    </span>
                  </td>
                  <td className="border border-[#83cd20] p-4">
                    <button
                      className="bg-[#83cd20] hover:bg-[#034833] text-white font-bold py-2 px-4 rounded"
                      onClick={() => cancelApplication(application._id)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyVisaApplications;
