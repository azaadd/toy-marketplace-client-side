import React from 'react';
import slide_img from '../../../assets/bus.jpg';
import slide_img2 from '../../../assets/spots-car.jpg';
import slide_img3 from '../../../assets/crane.jpg';
import slide_img4 from '../../../assets/cement-truck.jpg';
import slide_img5 from '../../../assets/tractor.jpg';




const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={slide_img5} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❯</a>

                    </div>
                    <div className="absolute flex items-center left-1/4 bottom-2 top-3/4">
                        <h1 className='text-7xl font-bold text-red-500'>Choose your favorite toy</h1>
                    </div>

                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={slide_img2} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❯</a>
                    </div>
                    <div className="absolute flex items-center left-1/4 bottom-2 top-3/4">
                        <h1 className='text-7xl font-bold text-red-500'>Choose your favorite toy</h1>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={slide_img} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❯</a>
                    </div>
                    <div className="absolute flex items-center left-1/4 bottom-2 top-3/4">
                        <h1 className='text-7xl font-bold text-red-500'>Choose your favorite toy</h1>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={slide_img3} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❮</a>
                        <a href="#slide5" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❯</a>
                    </div>
                    <div className="absolute flex items-center left-1/4 bottom-2 top-3/4">
                        <h1 className='text-7xl font-bold text-red-500'>Choose your favorite toy</h1>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={slide_img4} className="w-full" alt='' />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle text-2xl bg-base-300 hover:bg-gray-400 hover:text-white">❯</a>
                    </div>
                    <div className="absolute flex items-center left-1/4 bottom-2 top-3/4">
                        <h1 className='text-7xl font-bold text-red-500'>Choose your favorite toy</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;