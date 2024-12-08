import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
    const { registerWithPass,loginWithGoogle } = useContext(AuthContext);
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
                fetch('https://visa-navigator-backend-swart.vercel.app/users', {
                    method: "POST",
                    headers: { "content-type": "application/json" },
                    body: JSON.stringify(newUser)
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.insertedId) {
                            toast.success('User created successfully in the database!');
                            navigate('/');
                        } else {
                            toast.error('Error saving user data in the database!');
                        }
                    })
                    .catch((error) => {
                        console.error('Error during fetch:', error);
                        toast.error('Failed to save user data!');
                    });
            })
            .catch((error) => {
                console.error('Registration error:', error);
                toast.error('Failed to register. Please try again!');
            });
    };


    const handleLoginWithGoogle = () => {
       loginWithGoogle(auth)
       .then((result) => {
           console.log(result.user)
       })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">Register Now!</h1>

                <div className="card bg-base-100 max-w-sm shadow-2xl px-10 py-5">

                    <form onSubmit={handleRegister}>
                        <input type="name" placeholder="Name" className="input input-bordered w-full" name="name" required />
                        <input type="email" placeholder="Email" className="input input-bordered mt-3 w-full" name="email" required />
                        <input type="url" placeholder="Photo URL" className="input input-bordered mt-3 w-full" name="photo" required />

                        <div className="relative mt-3">
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

                        <div className="text-center ">
                              <button type="submit" className="btn btn-primary  w-full mt-6">Register</button>

                     </div>                    
                     </form>

                     <div className="text-center ">
                              <button onClick={handleLoginWithGoogle} type="submit" className="btn btn-primary  w-full mt-6">Login with Google</button>

                     </div>  



                    <p className="mt-3">
                        Do you have an account?{" "}
                        <Link to="/login" className="underline font-semibold">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;
