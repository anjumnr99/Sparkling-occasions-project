import { NavLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';
import { RxAvatar } from 'react-icons/rx';
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const navigate = useNavigate();

    const navLinks = <>
        <li className="text-md lg:text-xl font-semibold text-slate-600">
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li className="text-md lg:text-xl font-semibold text-slate-600"><NavLink
            to="/gallery"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-orange-500  font-bold " : ""
            }
        >
            Gallery
        </NavLink>
        </li>
        <li className="text-md lg:text-xl font-semibold text-slate-600"><NavLink
            to="/about"
            className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-orange-500  font-bold " : ""
            }
        >
            About Us
        </NavLink>
        </li>
    </>


    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('Logout Successfully!')
                navigate('/login')
            })
            .catch(err => {
                toast.error(err.message)
                console.log(err)
            })
    }


    return (
        <div className=" bg-white ">
            <div className="navbar max-w-[1440px] mx-auto  my-10 px-3 py-2 lg:px-8 lg:py-3">
                <div className="navbar-start">

                    <div className="">
                        <img className=" normal-case text-xl" src="https://see.fontimg.com/api/renderfont4/OV9ee/eyJyIjoiZnMiLCJoIjo1MiwidyI6MTAwMCwiZnMiOjUyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0NEQzFCNyIsInQiOjF9/U3BhcmtsaW5nIE9jY2FzaW9ucw/lucy-said-ok-personal-use-italic.png" alt="" />

                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" px-1 flex gap-6">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end flex justify-end items-center gap-3">

                    <div className="dropdown dropdown-bottom dropdown-end">
                        <label tabIndex={0} className=" lg:hidden text-2xl h-5 w-5">
                            <GiHamburgerMenu></GiHamburgerMenu>

                        </label>
                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box min-w-max">
                            {navLinks}
                        </ul>
                    </div>


                    {
                        user?.email ?
                            <div className="text-center">
                                <div className="hidden lg:block">
                                    <div className="">
                                        <label tabIndex={0} className="avatar">
                                            <div className=" w-16 rounded-full">
                                                <img src={user.photoURL} />
                                            </div>
                                        </label>

                                    </div>
                                    <p className=" text-center">{user.displayName}</p>
                                    <p className="">{user.email}</p>
                                   
                                        
                                        <button onClick={handleLogOut} className="btn text-lg font-semibold text-slate-600">
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </button>
                                   

                                </div>


                                <div className="dropdown dropdown-bottom dropdown-end">
                                    <label tabIndex={0} className="avatar lg:hidden w-12">

                                        <div className=" w-16 rounded-full">
                                            <img src={user.photoURL} />
                                        </div>


                                    </label>
                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                                        <li> <p className=" text-center">{user.displayName}</p></li>
                                        <li><p className="">{user.email}</p></li>
                                        <li><button onClick={handleLogOut} className="btn text-lg font-semibold text-slate-600">
                                            <NavLink
                                                to="/login"
                                                className={({ isActive, isPending }) =>
                                                    isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                                                }
                                            >
                                                Logout
                                            </NavLink>
                                        </button></li>
                                    </ul>
                                </div>

                            </div>
                            :

                            <div className="flex justify-center items-center gap-3">

                                <label tabIndex={0} className="avatar">
                                    <div className="">
                                        <RxAvatar className="text-4xl"></RxAvatar>
                                    </div>
                                </label>

                                <button className="text-lg lg:text-xl font-semibold text-slate-600">
                                    <NavLink
                                        to="/login"
                                        className={({ isActive, isPending }) =>
                                            isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                                        }
                                    >
                                        Login
                                    </NavLink>

                                </button>
                            </div>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;


