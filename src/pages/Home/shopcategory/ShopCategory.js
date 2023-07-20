import React, { useEffect, useState } from 'react';
import Category from './Category';

const ShopCategory = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('toys.json')
            .then(res => res.json())
            .then(data => setCategories(data));

    }, []);

    return (
        <div className='mx-16 mt-16'>
            <h2 className='mb-5 text-4xl font-bold text-gray-500'>Shop By Category</h2>
            <div className=''>
                {
                    categories.map(category => <Category
                        key={category._id}
                        category={category}
                    ></Category>
                    )
                }
            </div>

        </div>
    );
};

export default ShopCategory;