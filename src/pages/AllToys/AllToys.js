import React from 'react';
import { useLoaderData } from 'react-router-dom';
import All from './All';

const AllToys = () => {

    const allToys = useLoaderData();




    return (

        <div className="overflow-x-auto mx-16 mt-8 mb-12">
            <p className='text-3xl font-bold text-gray-600'>All Toys Here</p>
            <table className="table mt-3">
                {/* head */}
                <thead className='font-semibold bg-gray-200 text-black text-lg'>
                    <tr>
                        <th>Photo</th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    allToys.map(all => <All
                        key={all._id}
                        all={all}
                    ></All>)
                }


            </table>

        </div>

    );
};

export default AllToys;