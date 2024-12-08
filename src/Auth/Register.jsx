import { useContext, useState } from "react";


import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import auth from "./Firebase-init";
import { FaEye, FaEyeSlash, FaGoogle, FaLock } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";


const Register = () => {
    const {registerWithPass,loginWithGoogle} = useContext(AuthContext)
   const navigate = useNavigate();
   const [showPassword, setShowPassword] = useState(false);

   const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
};


    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
         
        if (!/[A-Z]/.test(password) ||  !/[a-z]/.test(password)) {
          toast.error("Password must include at least one uppercase and one lowercase letter!");
          return;
      }




        registerWithPass(email,password,photo,name)
        .then(result =>{
           
            toast.success('Register Successfully!')
           const newUser = {name,email,photo,name}

           
            
           

     
           fetch('https://visa-navigator-backend-swart.vercel.app/users',{
            method: "POST",
            headers:{
                "content-type": "application/json",
            },
            body:JSON.stringify(newUser)
           })
           .then(res => res.json())
           .then(data => {
        
            navigate('/')
            if(data.insertedId){

             alert('user created in mongodb database')
            }
           })


        })
        .catch(error => {
            console.log('error ashce:', error)
        })

    }



    const handleGoogleSignIn = () => {
      loginWithGoogle(auth)
      .then((result) => {
        const user = result.user;
      })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
          <ToastContainer></ToastContainer>
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-10 py-5">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
         
          <input type="name" placeholder="name" className="input input-bordered  " name="name" required />
        </div>
        <div className="form-control">
          
          <input type="email" placeholder="email" className="input input-bordered mt-3" name="email" required />
        </div>
        <div className="form-control">
         
          <input type="url" placeholder="photoUrl" className="input input-bordered mt-3" name="photo" required />
        </div>
        <div className="form-control">
         
        <div className="relative">
                          
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                className="input input-bordered w-full pl-10 pr-10"
                                name='password'
                               />
                         
                            <div
                                className="absolute right-3 top-4 text-gray-400 cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </div>
                        </div>       
                        
                         </div>
        <div className="form-control mt-6">
          <Link to="/" className="btn btn-primary">Register</Link>
        </div>
      </form>
      <div className="text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-primary px-16 "> <FaGoogle /> Login with Google</button>
    </div>
      <p className="mt-3">Do You Have Any Account? Please <Link to="/login" className="underline font-semibold">Login</Link></p>
    </div>
    
  </div>
</div>
    );
};

export default Register;