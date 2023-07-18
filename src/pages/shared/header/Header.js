import React from 'react';
import logo from '../../../assets/car-logo-e.png'
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/all_toys'>All Toys</Link></li>
        <li><Link to='/add_toy'>Add Toy</Link></li>
        <li><Link to='/my_toys'>My Toys</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
    </>


    return (
        <div className=''>
            <div className="px-16 navbar bg-primary h-24">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-semibold text-xl">
                            {navItems}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img src={logo} alt='' className="btn btn-ghost normal-case w-36 h-14 bg-white py-2 hover:bg-indigo-400"></img>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-semibold text-xl text-white">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end">
                    <img className='rounded-full w-14 h-14 bg-slate-300 mr-3' src="{}" alt="" />
                    <Link to='/login' className="btn hover:bg-primary hover:text-white bg-white text-xl">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;