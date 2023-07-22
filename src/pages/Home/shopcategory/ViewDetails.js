import React, { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';


const ViewDetails = () => {

    const detailData = useLoaderData();

    const { img, sellerName, email, toyName, price, availableQuantity, rating, description } = detailData;

    console.log(detailData)
    useEffect(() => {
        document.title = `Shop Toy | ${toyName}`;
    }, [])

    return (
        <div>
            <div className="hero pt-4 bg-base-200">
                <div className="hero-content flex-col lg:flex-row gap-16">
                    <img src={img} className="md:w-[625px] md:h-[370px] rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">{toyName}</h1>
                        <p className="py-4 font-semibold"><strong>Seller Name: </strong>{sellerName}</p>
                        <p className="py-4 font-semibold"><strong>Seller e-mail: </strong>{email}</p>
                        <p className="py-4 font-semibold"><strong>Price: </strong>$ {price}</p>
                        
                        <div className='flex items-center font-semibold'>
                            <p className='py-4 font-semibold mr-6'><strong>Ratings: </strong> </p>
                            <Rating

                                placeholderRating={rating}

                                emptySymbol={<FaRegStar className='fs-4'></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                                fullSymbol={<FaStar className='text-warning fs-4'></FaStar>}
                            ></Rating>
                            <span className='fs-5 bg-primary-subtle px-3 rounded-5'>{rating}</span>
                        </div>
                        <p className="py-4 font-semibold"><strong>Available Quantity: </strong>{availableQuantity}</p>
                        <p className="py-4"><strong>Description: </strong>{description}</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;