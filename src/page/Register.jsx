import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Lottie from "lottie-react";
import animation from '../assets/Animation - 1714318361741.json'
import Swal from "sweetalert2";
import { Slide } from "react-awesome-reveal";


const Register = () => {
    const {createUser, logOut}= useContext(AuthContext)
    const [registerError, setRegisterError]= useState('');
    const [registerSuccess, setRegisterSuccess]= useState('');
    const[errors, setErrors]= useState('');
    const navigate = useNavigate();
   
    const handleRegister = e=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const newUser = {name, email, photoUrl, password}
        console.log(newUser);
        setRegisterError('')
        setRegisterSuccess('')

        if(password.length<6){
          setRegisterError('Password should have at least 6 characters')
          return
        }

         else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one uppercase letter ')
            return
            
        }
        else if(!/[a-z]/.test(password)){
            setRegisterError('Password should have at least one lowercase letter')
            return
        }
         



        createUser(email, password)
        .then(result=>{
            console.log(result.user)
            navigate('/' );
            logOut()
            setRegisterSuccess('User Created Successfully')
            Swal.fire({
           
              text: 'successfully Registered',
              icon: 'success',
              confirmButtonText: 'Ok'
            }, registerSuccess)
            form.reset();
            updateProfile(result.user,{
                displayName:name,
                photoURL:photoUrl
            })
            .then(()=>{
            
                console.log('profile updated')
              })
                .catch((error)=>console.log(error))
        })
        .catch(error=>{
            console.log(error)
          setErrors(error.message)
          Swal.fire({
           
            text: 'User email already in use',
            icon: 'warning',
            confirmButtonText: 'Ok'
          }, errors)
        })

        
    }

    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Register now!</h1>
           <Lottie animationData={animation}></Lottie>
          </div>
          <Slide>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" placeholder="photoUrl" name="photoUrl" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
               
              </div> {
                registerError && <p className="text-red-600">{registerError}</p>
            }
            {
                registerSuccess && <p className="text-green-600">{registerSuccess}</p>
            }

              <div className="form-control mt-6">
                <button className="btn bg-[#eb9b40] text-black">Register</button>

              </div>
             
              <p>Already have an account? Please <Link to={'/logged'}> <span className="text-blue-800">Login</span> </Link></p>
            </form>
            
          </div>
          </Slide>
        </div>
      </div>
    );
};

export default Register;