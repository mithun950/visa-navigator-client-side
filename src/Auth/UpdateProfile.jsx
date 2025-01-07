import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "./Firebase-init";
import { AuthContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Lottie from "lottie-react"; 
import animationData from "../../src/assets/Animation - 1733887970156.json";

const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleUpdate = () => {
    if (!photoURL || !name) {
      setError("Please fill both fields before updating.");
      return;
    }
    setError("");

    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        toast.success('Your Profile updated Successfully!');
        navigate('/');
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
        toast.error(`Error: ${err.message}`);
      });
  };

  // Lottie options for animation
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData, 
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="bg-lime-50 w-11/12 mx-auto min-h-screen flex items-center justify-center">
      <ToastContainer />
      <div className="w-full sm:w-1/2 md:w-1/3 mx-auto shadow-lg p-8 rounded-lg bg-white">
        <h2 className="text-2xl text-[#034833] font-semibold text-center">Update Profile</h2>
        <div className="mt-4">
          <label className="block text-[#034833]">Name:</label>
          <input
            type="text"
            className="input input-bordered w-full text-black mt-2"
            placeholder="Enter your new name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mt-4">
          <label className="block text-[#034833]">Photo URL:</label>
          <input
            type="text"
            className="input input-bordered w-full text-black mt-2"
            placeholder="Enter your new photo URL"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="btn bg-[#83cd20] text-white hover:bg-[#72a120] w-full"
            onClick={handleUpdate}
          >
            Update Information
          </button>
        </div>
        <div className="flex justify-center mt-6">
          {/* Lottie Animation beside the form */}
          <Lottie options={defaultOptions} height={200} width={200} />
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
