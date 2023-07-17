import React from 'react';
import logo from '../../../assets/car-logo-e.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

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
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Contect Us</span>
                    <a href=' ' className=" "><strong>Email:</strong> toyinfo@gmail.com</a>
                    <a href=' ' className=" "><strong>Phone:</strong> 01230055000</a>
                    <a href=' ' className=" "><strong>Address:</strong> 108-000, Tejgaon I/A, <br /> Dhaka, Bangladesh</a>
                </div>
            </footer>
            <p className='text-center p-4 bg-gray-300 font-semibold hover:bg-slate-600 hover:text-white'>&copy; Copyright 2023. All Rights Reserved by AK_Azad.</p>
        </div>
    );
};

export default Footer;