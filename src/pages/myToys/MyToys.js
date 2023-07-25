import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import MyToysBody from './MyToysBody';
import Swal from 'sweetalert2';


const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [sellers, setSellers] = useState([]);

    


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);



    const totalPages = Math.ceil(sellers.length / itemsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }


    const options = [ 10, 15];

    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    }


    
    console.log(sellers.length)

    

    const url = `https://b7a11-toy-marketplace-server-side-chi.vercel.app/sellers?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSellers(data);
            })
    }, []);



    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`https://b7a11-toy-marketplace-server-side-chi.vercel.app/sellers/${id}`, {
                        method: 'DELETE'
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                            if (data.deletedCount > 0) {
                                Swal.fire(
                                    'Deleted!',
                                    'Your Toy has been deleted.',
                                    'success'
                                )
                                const remaining = sellers.filter(booking => booking._id !== id);
                                setSellers(remaining);
                            }
                        })
                }
            })
    }


    return (
        <>
            <div className="overflow-x-auto mx-16 mt-8 mb-12">
                <div className='flex gap-6'>
                    <img className='w-28 h-28 rounded' src={user.photoURL ? user.photoURL : ''} alt="" />
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
                            handleDelete={handleDelete}
                        ></MyToysBody>)
                    }


                </table>

            </div>

            {/* pagination */}

            <div>
                <div className='pagination my-8 text-center'>
                    <p className='mb-3'>Current Page: {currentPage}</p>
                    {
                        pageNumbers.map(number => <button className={currentPage === number ? 'selected' : ''}
                            key={number}
                            onClick={() => setCurrentPage(number)}
                        >
                            {number}
                        </button>)
                    }
                    <select className='py-2 px-4 rounded bg-gray-300' value={itemsPerPage} onChange={handleSelectChange}>
                        {options.map(option => (
                            <option
                                key={option} value={option}
                            > {option} </option>
                        ))}

                    </select>
                </div>
            </div>

        </>
    );
};

export default MyToys;