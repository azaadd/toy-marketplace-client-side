import React from 'react';
import logo from '../../../assets/car-logo-e.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='mt-6'>
            <footer className="px-16 footer p-10 bg-base-300 text-base-content">
                <div>
                    <img src={logo} alt="" />
                    <p>Toys Factory Ltd.<br />Providing reliable Company since 1992</p>
                </div>
                <div className=''>
                    <span className="footer-title">Let's  connect</span>
                    <div className='flex gap-2 text-4xl'>
                        <a href=' ' className="
                    "><FaFacebook /> </a>
                        <a href=' ' className=""><FaInstagram /></a>
                        <a href=' ' className=" "><FaTwitter /></a>
                        <a href=' ' className=" "><FaLinkedin /></a>
                        <a href=' ' className=" "><FaYoutube /></a>
                    </div>


                </div>
                <div>
                    <span className="footer-title">Explore</span>
                    <Link to='/' className="link link-hover font-semibold">Home</Link>
                    <Link to='/all_toys' className="link link-hover font-semibold">All Toys</Link>
                    <Link to='/add_toy' className="link link-hover font-semibold">Add Toy</Link>
                    <Link to='/my_toys' className="link link-hover font-semibold">My Toys</Link>
                    <Link to='/blog' className="link link-hover font-semibold">Blog</Link>
                </div>
                <div>
                    <span className="footer-title">Contect Us</span>
                    <a href=' ' className=" "><strong>Email:</strong> toyinfo@gmail.com</a>
                    <a href=' ' className=" "><strong>Phone:</strong> 01230055000</a>
                    <a href=' ' className=" "><strong>Address:</strong> 108-000, Tejgaon I/A, <br /> Dhaka, Bangladesh</a>
                </div>
            </footer>
            <p className='text-center p-4 bg-gray-400 font-semibold hover:bg-slate-600 hover:text-white'>&copy; Copyright 2023. All Rights Reserved by AK_Azad.</p>
        </div>
    );
};

export default Footer;