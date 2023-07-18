import React from 'react';
import specialcollect from '../../../assets/skitu.jpg';
import specialcollect2 from '../../../assets/riksha-four-whil.jpg';
import specialcollect3 from '../../../assets/girls-toys.jpg';
import specialcollect4 from '../../../assets/toy-cycle.jpg';
import specialcollect5 from '../../../assets/boy-toys.jpg';
import specialcollect6 from '../../../assets/speed-riksha.jpg';

const SpecialCollection = () => {
    return (
        <div className='mt-8 mx-16'>
            <h2 className='text-4xl font-bold text-gray-500'>Our Special Collections</h2>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-3  mt-3'>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={specialcollect3} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start px-3 pt-3 m-0">
                        <h5 className="card-title">Girls Toys</h5>
                        <p className='font-semibold'>$ 180.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-40">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={specialcollect2} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start px-3 pt-3 m-0">
                        <h5 className="card-title">Electric Bicycle</h5>
                        <p className='font-semibold'>$ 360.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-40">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={specialcollect} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start px-3 pt-3 m-0">
                        <h5 className="card-title">Scooter</h5>
                        <p className='font-semibold'>$ 450.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-40">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={specialcollect5} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start px-3 pt-3 m-0">
                        <h5 className="card-title">Boys Toys</h5>
                        <p className='font-semibold'>$ 220.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-40">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={specialcollect4} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start px-3 pt-3 m-0">
                        <h5 className="card-title">Bike for Girls</h5>
                        <p className='font-semibold'>$ 380.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-40">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-full h-80 bg-base-100 shadow-xl">
                    <figure className="px-3 pt-3">
                        <img src={specialcollect6} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-start text-start px-3 pt-3 m-0">
                        <h5 className="card-title">4 Wheels Kids Go Kart</h5>
                        <p className='font-semibold'>$ 430.00</p>
                        <div className="card-actions">
                            <button className="btn btn-primary w-40">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpecialCollection;