import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysBody from './MyToysBody';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [sellers, setSellers] = useState([]);

    const url = `http://localhost:5000/sellers?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSellers(data);
            })
    }, []);

    return (
        <div className="overflow-x-auto mx-16 mt-8 mb-12">
            <div className='flex gap-6'>
                <img className='w-28 h-28 rounded-sm' src={user.photoURL ? user.photoURL : ''} alt="" />
                <div>
                    <p className='text-2xl font-semibold text-gray-700'>{user?.displayName}</p>
                    <p className='font-semibold text-gray-700'>Email: {user?.email}</p>
                    <p className='text-xl font-semibold text-gray-700'>Total Items: {sellers?.length}</p>
                </div>
            </div>

            <table className="table mt-3">
                {/* head */}
                <thead className='font-semibold bg-gray-200 text-black text-lg'>
                    <tr>
                        <th>Photo</th>
                        <th>Toy Name</th>
                        <th>Sub-Category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>

                {
                    sellers.map(seller => <MyToysBody
                        key={seller._id}
                        seller={seller}
                    ></MyToysBody>)
                }


            </table>

        </div>
    );
};

export default MyToys;