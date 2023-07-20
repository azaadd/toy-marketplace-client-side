import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Car = ({ car }) => {
    const {
        _id,
        img,
        sellerName,
        email,
        toyName,
        subCategory,
        price,
        availableQuantity,
        rating,
        description
    } = car;

    return (
        <div>
            
            <div className="card w-full bg-base-100 shadow-xl">
                <figure className="px-3 pt-3">
                    <img src={img} alt="Shoes" className="rounded-xl h-[170px] w-full" />
                </figure>
                <div className="card-body items-start text-start px-3">
                    <h2 className="card-title">{toyName}</h2>
                    <p className='font-semibold'>Price: $ {price}</p>
                    <div className='flex items-center font-semibold'>
                        <p className='mr-6'>Ratings: </p>
                        <Rating

                            placeholderRating={rating}

                            emptySymbol={<FaRegStar className='fs-4'></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                            fullSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                        ></Rating>
                        <span className='fs-5 bg-primary-subtle px-3 rounded-5'>{rating}</span>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary w-64 ml-2 mt-3">View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Car;