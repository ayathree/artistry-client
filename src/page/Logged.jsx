import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


const Logged = () => {
  const {signIn, google, github} =useContext(AuthContext)
  const [success, setSuccess]= useState('');
  const[error, setError]= useState('')
  const handleLogIn=e=>{
    e.preventDefault();
    const form= e.target;
    const email= form.email.value;
    const password = form.password.value;
    const newLogger= {email, password}
    console.log(newLogger)

    setError('')
    setSuccess('')

    signIn(email, password)
    .then(result=>{
      console.log(result.user)
      setSuccess('User logged successfully')
      form.reset();
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })


    

  }
  const handleGoogle=()=>{
    setError('')
    setSuccess('')
    google()
    .then(result=>{
      console.log(result.user)
      setSuccess('User logged successfully')
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })
  }

  const handleGithub=()=>{
    setError('')
    setSuccess('')
    github()
    .then(result=>{
      console.log(result.user)
      setSuccess('User logger successfully')
    })
    .catch(error=>{
      console.log(error.message)
      setError(error.message)
    })
  }


    return (
        <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#eb9b40]">Login</button>
              </div>
              <p>Do not have an account? Please <Link to={'/register'}><span className="text-blue-800">Register</span></Link></p>
             
            </form>
            <div className="flex flex-row justify-center p-10 gap-4">
              <button onClick={handleGoogle} className="btn bg-[#eb9b40]"><FaGoogle />Google</button>
              <button onClick={handleGithub} className="btn bg-[#eb9b40]"><FaGithub />Github</button>
            </div>
           
            {
              error && <p className="text-red-600">{error}</p>
            }
            {
              success && <p className="text-green-600">{success}</p>
            }
          </div>
        </div>
      </div>
    );
};

export default Logged;