import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";
import auth from "./Firebase-init";
import { AuthContext } from "../Auth/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  


const UpdateProfile = () => {
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [error,setError] = useState("")
  const navigate = useNavigate();
   const {user} = useContext(AuthContext);

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
          toast.success('Your Profile updated Successfully!')
      navigate('/')
      })
      .catch((err) => {
        setError(`Error: ${err.message}`);
        toast.error(`Error: ${err.message}`);
      });
      
  };

  return (
    <div>
        <ToastContainer></ToastContainer>
    <div className="w-1/2 mx-auto shadow-lg p-10 rounded-lg mt-8 mb-10 bg-blue-500">
      <h2 className="text-2xl text-white font-semibold">Update Profile</h2>
      <div className="mt-4 text-white">
        <label>Name:</label>
        <input
          type="text"
          className="input input-bordered text-black w-full mt-2"
          placeholder="Enter your new name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mt-4 text-white">
        <label>Photo URL:</label>
        <input
          type="text"
          className="input input-bordered w-full text-black mt-2"
          placeholder="Enter your new photoUrl"
          value={photoURL}
          onChange={(e) => setPhotoURL(e.target.value)}
          required
        />
      </div>
      <div className="flex justify-center">
      <button
        className="btn bg-white text-teal-600 mt-8"
        onClick={handleUpdate}
      >
        Update Information
      </button>
      </div>
      
    </div>
   
    </div>
  );
};

export default UpdateProfile;
