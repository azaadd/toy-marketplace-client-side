import React from 'react';
import logo from '../../../assets/car-logo-e.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = <>
        <li><a>Home</a></li>
        <li><a>All Toys</a></li>
        <li><a>Add Toy</a></li>
        <li><a>My Toys</a></li>
        <li><a>Blog</a></li>
    </>


    return (
        <div className='mb-12'>
            <div className="px-16 navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt='' className="btn btn-ghost normal-case text-xl"></img>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <img className='rounded-full w-16 h-16 bg-slate-300 mr-3' src="{}" alt="" />
                    <Link to='/login' className="btn hover:bg-gray-400 hover:text-white bg-white">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;