import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const ForgatePass = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); 
   const {forgotPass} = useContext(AuthContext)



  const handleForgotPassword = (e) => {
    e.preventDefault();
     
forgotPass(email)
.then(() => {
    setMessage("Password reset link has been sent to your email!");

})
.catch((error) => {
    setMessage("Error: " , error.message);
})

  };

  return (
    <div className="hero bg-base-200 min-h-screen p-4">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Forgot Password</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 px-5">
          <form onSubmit={handleForgotPassword} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter Your Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Reset Password</button>
            </div>
          </form>
          
          <p className="text-green-500">{message}</p>
        </div>
      </div>
    </div>
  );
};

export default ForgatePass;
