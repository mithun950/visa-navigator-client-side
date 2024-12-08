import { useContext } from "react";


import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
    const {registerWithPass} = useContext(AuthContext)
   const navigate = useNavigate();

    const handleRegister = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;
        
        registerWithPass(email,password,photo)
        .then(result =>{
           console.log(result.user)

           const newUser = {name,email,photo}

           console.log(newUser)


     
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
    return (
        <div className="hero bg-base-200 min-h-screen">
          
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register Now!</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
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
         
          <input type="password" placeholder="password" className="input input-bordered mt-3 " name="password" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <p>Do You Have Any Account? Please <Link to="/login" className="underline font-semibold">Login</Link></p>
    </div>
  </div>
</div>
    );
};

export default Register;