import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import All from './All';
import './AllToys.css'

const AllToys = () => {
    const totalProducts = useLoaderData();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    
    const [allToys, setAllToys] = useState([]);
    
    // useEffect(() => {
    //     fetch('http://localhost:5000/customers')
    //     .then(res => res.json())
    //     .then(data => setAllToys(data))
    // }, [] );


    useEffect(() => {
        async function fetchData () {
            const response = await fetch(`http://localhost:5000/customers?page=${currentPage}&limit=${itemsPerPage}`);
            const data = await response.json();
            setAllToys(data);
        }
        fetchData();
    }, [currentPage, itemsPerPage] );


    
    console.log(allToys.length)
    console.log(totalProducts.length)

    
    const totalPages = Math.ceil(totalProducts.length/itemsPerPage);

    const pageNumbers = [];
    for(let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    
    const options = [5, 10, 15];

    function handleSelectChange(event) {
        setItemsPerPage(parseInt(event.target.value));
        setCurrentPage(1);
    }


    return (

        <>
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

        {/* pagination */}

            <div className='pagination my-8 text-center'>
                <p className='mb-3'>Current Page: {currentPage}</p>
                {
                    pageNumbers.map(number =><button className={currentPage === number ? 'selected' : ''}
                    key={number}
                    
                    onClick={() => setCurrentPage(number)}
                    >
                        {number}
                    </button>)
                }
                <select className='py-2 px-4  bg-gray-300 rounded' value={itemsPerPage} onChange={handleSelectChange}>
                    {options.map(option => (
                        <option
                        key={option} value={option}
                        > {option} </option>
                    ))}

                </select>
            </div>

        </>

    );
};

export default AllToys;