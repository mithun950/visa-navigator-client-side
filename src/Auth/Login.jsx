import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { toast } from "react-toastify";
import Lottie from "lottie-react";
import loginAnimation from "../../src/assets/Animation - 1733899054500 (1).json"; // Replace with your Lottie JSON file path

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const newLogin = { email, password };
        console.log(newLogin);

        // signin
        loginUser(email, password)
            .then(() => {
                toast.success('Login Successfully');
                navigate('/', { replace: true });
            })
            .catch(error => {
                console.log('error occurred:', error);
                toast.error("Login failed. Please try again!");
            });

        const lastSignInTime = result?.user?.metadata?.lastSignInTime;
        const loginInfo = { email, lastSignInTime };

        fetch(`https://coffee-server-side-ten.vercel.app/users/${email}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(loginInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log('Sign-in info updated in DB', data);
            })
            .catch(error => {
                console.log('Error occurred:', error);
            });
    };

    return (
        <div className="hero bg-lime-50 min-h-screen p-4">
            <div className="hero-content flex-col lg:flex-row-reverse items-center">
                {/* Lottie Animation */}
                <div className="w-full lg:w-1/2 flex justify-center mb-6 lg:mb-0">
                    <Lottie animationData={loginAnimation} loop className="w-full max-w-md" />
                </div>

                {/* Login Form */}
                <div className="w-full lg:w-1/2 ">
                    <div className="text-center lg:text-left mb-6">
                        <h1 className="text-5xl font-bold">Login Now!</h1>
                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl shadow-main-color py-4 px-5">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                                <label className="label">
                                    <Link to="/forgatePass" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-main-color">LogIn</button>
                            </div>
                        </form>
                        <p>Do not have any account? Please <NavLink to="/register" className="font-bold underline">Register</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
