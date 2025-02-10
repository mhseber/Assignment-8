import { IoCartOutline } from "react-icons/io5";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
const Navbar = () => {
    const links = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/statistics">Statistics</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/">oooo</Link></li>
    </>
    return (
        <div className="navbar  border- bg-[#9538E2] lg:w-[1240px] lg:h-[594px] lg:m-10 mt-2 p-2 rounded-xl">
            <div className="navbar-start pb-80">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="text-white font-extrabold lg:text-3xl text-xl lg:mb-40">Gadget Heaven</a>
            </div>
            <div className="navbar-center hidden lg:flex pb-80 ">
                <ul className="menu menu-horizontal px-1 text-white font-bold mb-40 ">
                    {links}
                </ul>
            </div>
            {/* icons */}
            <div className="navbar-end pb-80">
                <div className=" flex text-2xl gap-3 pr-6 lg:mb-40">
                    <p className="border-2 bg-white rounded-full p-2"><IoCartOutline /></p>
                    <p className="border-2 bg-white rounded-full p-2"><AiOutlineHeart /></p>
                </div>
            </div>
        </div>




    );
};

export default Navbar;