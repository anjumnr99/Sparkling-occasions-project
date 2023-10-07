import { Link } from "react-router-dom";


const Login = () => {
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
                </form>
              
            </div>
        </div>
    );
};

export default Login;