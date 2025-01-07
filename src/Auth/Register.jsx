import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa"; // Add Google icon
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import registerAnimation from "../../src/assets/Animation - 1733887970156.json"; // Replace with your Lottie JSON file path

const Register = () => {
  const { registerWithPass, loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password)) {
      toast.error("Password must include at least one uppercase and one lowercase letter!");
      return;
    }

    if (!/^https?:\/\/.+/.test(photo)) {
      toast.error("Invalid photo URL. Please provide a valid URL!");
      return;
    }

    registerWithPass(email, password, photo, name)
      .then(() => {
        const newUser = { name, email, photo };
        fetch("https://visa-navigator-backend-swart.vercel.app/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success("User created successfully in the database!");
              navigate("/");
            } else {
              toast.error("Error saving user data in the database!");
            }
          })
          .catch((error) => {
            console.error("Error during fetch:", error);
            toast.error("Failed to save user data!");
          });
      })
      .catch((error) => {
        console.error("Registration error:", error);
        toast.error("Failed to register. Please try again!");
      });
  };

  const handleLoginWithGoogle = () => {
    loginWithGoogle()
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero bg-lime-50 min-h-screen flex items-center justify-center px-4 py-8">
      <div className="flex flex-col lg:flex-row-reverse items-center bg-lime-100 shadow-lg rounded-lg p-6 max-w-4xl w-full">
        {/* Animation Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0 lg:order-first">
          <Lottie animationData={registerAnimation} loop className="w-full max-w-md" />
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-4xl font-bold text-center mb-6">Register Now!</h1>
          <div className="card bg-base-100 p-6 shadow-2xl">
            <form onSubmit={handleRegister}>
              <input
                type="name"
                placeholder="Name"
                className="input input-bordered w-full mb-4"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered w-full mb-4"
                name="email"
                required
              />
              <input
                type="url"
                placeholder="Photo URL"
                className="input input-bordered w-full mb-4"
                name="photo"
                required
              />

              <div className="relative mb-4">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="input input-bordered w-full pl-10 pr-10"
                  name="password"
                  required
                />
                <div
                  className="absolute right-3 top-4 text-gray-400 cursor-pointer"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>

              <button type="submit" className="btn text-white bg-main-color w-full mb-4">
                Register
              </button>
            </form>

            {/* Separator and Google Login Button */}
            <span className="text-center block mb-4"> <hr className="my-1" />or <hr className="my-1" /> </span>
           
            
            <button 
              onClick={handleLoginWithGoogle} 
              className="btn btn-outline w-full mb-4 flex items-center justify-center space-x-2">
              <FaGoogle className="text-lg" />
              <span>Login with Google</span>
            </button>

            <p className="text-center">
              Do you have an account?{" "}
              <Link to="/login" className="underline font-semibold">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
