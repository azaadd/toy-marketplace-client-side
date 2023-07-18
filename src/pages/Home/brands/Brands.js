import React from 'react';
import b_logo from '../../../assets/brands/b1.JPG';
import b_logo2 from '../../../assets/brands/b2.JPG';
import b_logo3 from '../../../assets/brands/b3.JPG';
import b_logo4 from '../../../assets/brands/b4.JPG';
import b_logo5 from '../../../assets/brands/b5.JPG';
import b_logo6 from '../../../assets/brands/b6.JPG';
import b_logo7 from '../../../assets/brands/b7.JPG';
import b_logo8 from '../../../assets/brands/b8.JPG';
import b_logo9 from '../../../assets/brands/b9.JPG';
import b_logo10 from '../../../assets/brands/b10.JPG';
import b_logo11 from '../../../assets/brands/b11.JPG';
import b_logo12 from '../../../assets/brands/b12.JPG';

const Brands = () => {
    return (
        <div className='my-6 py-4 pb-8 bg-[#eee8e8]'>
            <h4 className='mx-16 mt-8 mb-3 text-2xl font-bold text-gray-600'>OUR BRANDS</h4>
            <div className='grid grid-cols-4 md:grid-cols-12 mx-16'>
               <img src={b_logo} alt="" />
               <img src={b_logo2} alt="" />
               <img src={b_logo3} alt="" />
               <img src={b_logo4} alt="" />
               <img src={b_logo5} alt="" />
               <img src={b_logo6} alt="" />
               <img src={b_logo7} alt="" />
               <img src={b_logo8} alt="" />
               <img src={b_logo9} alt="" />
               <img src={b_logo10} alt="" />
               <img src={b_logo11} alt="" />
               <img src={b_logo12} alt="" />
            </div>
        </div>
    );
};

export default Brands;