import React from 'react';
import outdoorfun from '../../../assets/outdoor-fun.jpg';
import outdoorfun1 from '../../../assets/Basketball Stand For Children.jpg';
import outdoorfun2 from '../../../assets/Dinosaur Play Center.jpg';
import outdoorfun3 from '../../../assets/Flamingo Ride.jpg';
import outdoorfun4 from '../../../assets/Inflatable Gator Play Center.jpg';
import outdoorfun6 from '../../../assets/Royal castle play tent.jpg';
import outdoorfun7 from '../../../assets/Seesaw 360 Degree.jpg';



const OutdoorFun = () => {
    return (
        <div className='text-center mx-16 items-center md:flex gap-3 mt-6'>

            <div className='md:w-1/2'>

                <img className='w-[600px] h-[800px]' src={outdoorfun} alt="" />

            </div>
            <div className='md:w-1/2'>
                <h3 className='block text-4xl font-bold text-gray-500'>OUTDOOR FUN</h3>
                <p className='text-2xl font-semibold text-gray-500'>fun will be unlimited!</p>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-2  mt-3'>



                    <div className="card w-full h-80 bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={outdoorfun4} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-start px-3 pt-3 m-0">
                            <h5 className="card-title">Inflatable Gator Play Center</h5>

                            <p className='font-semibold'>$ 300.00</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-40">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full h-80 bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={outdoorfun6} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-start px-3 pt-3 m-0">
                            <h5 className="card-title">Royal castle play tent</h5>

                            <p className='font-semibold'>$ 245.00</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-40">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full h-80 bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={outdoorfun1} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-start px-3 pt-3 m-0">
                            <h5 className="card-title">Basketball Stand For Children</h5>

                            <p className='font-semibold'>$ 350.00</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-40">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full h-80 bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={outdoorfun2} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-start px-3 pt-3 m-0">
                            <h5 className="card-title">Dinosaur Play Center</h5>
                            <p className='font-semibold'>$ 360.00</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-40">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full h-80 bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={outdoorfun7} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-start px-3 pt-3 m-0">
                            <h5 className="card-title">Seesaw 360 Degree</h5>
                            <p className='font-semibold'>$ 280.00</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-40">Buy Now</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-full h-80 bg-base-100 shadow-xl">
                        <figure className="px-3 pt-3">
                            <img src={outdoorfun3} alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-start px-3 pt-3 m-0">
                            <h5 className="card-title">Flamingo Ride</h5>
                            <p className='font-semibold'>$ 180.00</p>
                            <div className="card-actions">
                                <button className="btn btn-primary w-40">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OutdoorFun;