import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Auth/AuthProvider";

const MyVisaApplications = () => {

  const {user} = useContext(AuthContext);
  const [visaData, setVisaData] = useState([]);
  const [applications, setApplications] = useState([]);
    
  useEffect(() => {

    fetch('https://visa-navigator-backend-swart.vercel.app/visa')
      .then(res => res.json())
      .then(data => setVisaData(data));

    fetch('https://visa-navigator-backend-swart.vercel.app/applications')
      .then(res => res.json())
      .then(data => setApplications(data.filter((app) => app.email === user.email)));
  }, [user.email]);


  const cancelApplication = (applicationId) => {

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, cancel it!',})
        .then((result) => {
            if(result.isConfirmed){
    fetch(`https://visa-navigator-backend-swart.vercel.app/applications/${applicationId}`, {
      method: 'DELETE',
    })
    .then(() => {

      setApplications(prevApplications => prevApplications.filter(application => application.id !== applicationId));
      if(data.deletedCount>0){
      Swal.fire('Cancelled!', 
        'Your application has been Canceled.',
         'success');
      }
    });
   }
});
  };

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5">
      {applications.map(application => {
        const visa = visaData.find(v => v._id === application.visaId);
        



        return (
          <div key={application._id} className="visa-card shadow-xl p-10 text-center mt-16">
            <img className="rounded-lg" src={visa.countryImage} alt={visa.countryName} />
            
            <h3 className="text-2xl font-bold mt-3">{visa.countryName}</h3>
            <p className="mt-5"><span className="font-bold">Visa_type: </span> {visa.visaType}</p>
            <p><span className="font-bold">processingTime:</span>  {visa.processingTime}</p>
            <p><span className="font-bold">Fee: </span>  {visa.fee}</p>
            <p><span className="font-bold">Validity :</span>  {visa.validity}</p>
            <p><span className="font-bold">ApplicationMethod:</span> {visa.applicationMethod}</p>
            <p><span className="font-bold">AppliedDate: </span>  {application.appliedDate}</p>
            <p><span className="font-bold">Applicant's name: </span> {application.firstName} {application.lastName}</p>
            <p><span className="font-bold">Applicant’s email: </span>  {application.email}</p>
            <button className="btn btn-primary mt-5 text-bold" onClick={() => cancelApplication(application._id)}>Cancel</button>
          </div>
        );
      })}
    </div>
  );
};

export default MyVisaApplications;
