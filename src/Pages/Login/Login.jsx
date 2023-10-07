import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {googleLogin} = useContext(AuthContext);

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(res=>console.log(res.user))
        .catch(err=>console.error(err.message))
    }
    return (
        <div className=" max-w-4xl mx-auto min-h-[70vh] px-3 mb-5  bg-base-200 flex flex-col  justify-center items-center ">
            <h1 className=" text-5xl text-orange-600 font-bold mb-4">Login now!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
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
                        <button className="btn bg-orange-600 text-white">Login</button>
                    </div>
                      <p className="font-medium text-slate-600">Don't have an account? Please <Link className=" text-rose-700 underline font-bold" to='/register'>Register</Link></p>
                      <div className="flex justify-evenly items-center">
                        <hr className="w-[30%] mx-auto border-2" />
                        <p className="w-[30%] mx-[5%] text-lg font-semibold">Login with</p>
                        <hr className="w-[30%] mx-auto border-2"/>
                      </div>
                      
                </form>
                <div className="text-center">
                        <button onClick={handleGoogleLogin} className="btn btn-link text-lg font-bold text-rose-700">Google</button>
                      </div>
            </div>
        </div>
    );
};

export default Login;