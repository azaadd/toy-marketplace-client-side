import React, { useEffect, useState } from 'react';

const ShopCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        fetch('toys.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    }, []);

    return (
        <div className='mx-16 mt-8'>
            <h2 className='mb-3 text-4xl font-bold text-gray-500'>Shop By Category</h2>
            <div className=''>
                <p>Shop by Categories: {categories.length}</p>
            </div>

        </div>
    );
};

export default ShopCategory;