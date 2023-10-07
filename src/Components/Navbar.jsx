import {  NavLink } from "react-router-dom";
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
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
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start block">

                <div className="">
                    <img className="relative normal-case text-xl" src="https://see.fontimg.com/api/renderfont4/OV9ee/eyJyIjoiZnMiLCJoIjo1MiwidyI6MTAwMCwiZnMiOjUyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0NEQzFCNyIsInQiOjF9/U3BhcmtsaW5nIE9jY2FzaW9ucw/lucy-said-ok-personal-use-italic.png" alt="" />
                    <p className=" absolute left-28 md:left-64   "> <img src="https://see.fontimg.com/api/renderfont4/BW6ld/eyJyIjoiZnMiLCJoIjoxMiwidyI6MTAwMCwiZnMiOjEyLCJmZ2MiOiIjRUE3ODVCIiwiYmdjIjoiI0ZBRjZGMSIsInQiOjF9/RXZlbnQgQWdlbmN5/sparky-stones-regular.png" alt="" /></p>
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
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-fit">
                        {navLinks}
                    </ul>
                </div>

                <button className="text-lg lg:text-xl font-semibold text-slate-600">
                    <NavLink
                        to=""
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "  text-orange-500 font-bold" : ""
                        }
                    >
                        Login
                    </NavLink>
                </button>
            </div>
        </div>
    );
};

export default Navbar;


