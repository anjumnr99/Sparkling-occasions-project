import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { GiAutomaticSas } from "react-icons/gi";

const Register = () => {
    const {signUpWithEmailAndPassword,userUpdate} = useContext(AuthContext);

    const navigate = useNavigate();

    const handleSignUpWithEmailAndPassword = e =>{
          e.preventDefault();
          const email = e.target.email.value;
          const password = e.target.password.value;
          const name = e.target.name.value;
          const image = e.target.image.value;
          console.log(email,password,name);

          if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]{6,}$/.test(password)){
           return toast.error('Invalid password. The password must consists with at least one capital letter , one special character and 6 characters ')
        }


          signUpWithEmailAndPassword(email,password)
          .then(res=>{
            userUpdate(name,image)
            .then(()=>{
                setTimeout(()=>{
                window.location.reload();
               },1000);
               
               toast.success('Profile successfully created')  
               navigate('/');
               
               
               
            })
          })
          .catch(err=>{
            toast.success(err.message)
          })

    };
    return (
        <div className=" max-w-4xl mx-auto min-h-[60vh] px-3 mb-5 bg-base-200 flex flex-col  justify-center items-center ">
            <h1 className=" text-5xl text-orange-600 font-bold mb-4">Register now!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSignUpWithEmailAndPassword} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-slate-600 font-bold">Name</span>
                        </label>
                        <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-slate-600 font-bold">Img URL</span>
                        </label>
                        <input type="text" placeholder="Image URL" name="image" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-slate-600 font-bold">Email</span>
                        </label>
                        <input type="email" placeholder="Enter your email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base text-slate-600 font-bold">Password</span>
                        </label>
                        <input type="password" placeholder="Enter your password" name="password" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <button type="submit" className="btn bg-orange-600 text-white">Register</button>
                    </div>
                    <p className="font-medium text-slate-600">Already have an account? Please <Link className=" text-rose-700 underline font-bold" to='/login'>Login</Link> </p>
                </form>

            </div>
        </div>
    );
};

export default Register;