import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';



const Category = ({ toy }) => {
    const {
        _id,
        img,
        toyName,
        price,
        rating,
    } = toy;


    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure className="px-3 pt-3">
                <img src={img} alt="Shoes" className="rounded-xl h-[170px] w-full" />
            </figure>
            <div className="card-body items-start text-start px-3">
                <h2 className="card-title">{toyName}</h2>
                <p className='font-semibold'>Price: $ {price}</p>
                <div className='md:flex items-center font-semibold'>
                    <p className='mr-6'>Ratings: </p>
                    <Rating

                        placeholderRating={rating}

                        emptySymbol={<FaRegStar className='fs-4'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                        fullSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                    ></Rating>
                    <span className='fs-5 bg-primary-subtle px-3 rounded-5'>{rating}</span>
                </div>
                <div className="card-actions mx-auto">
                    <Link to={`/view_details/${_id}`} className="btn btn-primary md:w-64  mt-3 sm:w-40  items-center">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default Category;