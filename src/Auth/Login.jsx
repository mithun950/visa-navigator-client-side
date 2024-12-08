import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";



const Login = () => {
    const {loginUser} = useContext(AuthContext);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const newLogin = (email,password);
        console.log(newLogin)

        // signin
        loginUser(email,password)
        .then(() => {
            
           
            navigate('/' ,{replace:true})

        }
        )

            
            const lastSignInTime = result?.user?.metadata?.lastSignInTime;
            const loginInfo = {email, lastSignInTime}

            fetch(`https://coffee-server-side-ten.vercel.app/users/${email}`,{
                method: 'PATCH',
                headers: {
                    'content-type' : 'application.json',
                },
                body: JSON.stringify(loginInfo)
            })
            .then(res => res.json())
            .then(data => {
                console.log('signInfo update in db' , data)
            })
        
        .catch(error => {
            console.log('error ashce:', error)
        })

    }
    return (
        <div className="hero bg-base-200 min-h-screen p-4">
          
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login Now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 px-5">
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
                <button className="btn btn-primary">Login In</button>
              </div>
            </form>
            <p>Do not have any account? Please <NavLink to="/register" className="font-bold underline">Register</NavLink></p>
          </div>
        </div>
      </div>
    );
};

export default Login;
