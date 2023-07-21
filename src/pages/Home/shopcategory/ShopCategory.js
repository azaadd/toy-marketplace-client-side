import React, { useEffect, useState } from 'react';
import { Box, Tab, Tabs } from '@mui/material';
import Category from './Category';

const toyCategoies = [
    'Car',
    'Truck',
    'Tractor',
    'Crane',
    'Bus'
];

const ShopCategory = () => {
    const [value, setValue] = useState(0);
    const [categories, setCategories] = useState([]);
    const [filteredCategories, setFilteredCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/customers')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setFilteredCategories(data.filter(toy => toy.subCategory === toyCategoies[0]));
            });
    }, []);

    useEffect(() => {
        const toyCategory = toyCategoies[value];
        const remaining = categories.filter(toy => toy.subCategory === toyCategory);
        setFilteredCategories(remaining);
    }, [value, categories]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='mx-16 mt-16'>
            <h2 className='mb-5 text-4xl font-bold text-gray-500'>Shop By Category</h2>
            <div className=''>

                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Box sx={{ borderBottom: 2, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            aria-label="scrollable auto tabs example"
                        >
                            {
                                toyCategoies.map((toyCategory, index) => (
                                    <Tab 
                                    key={index}
                                    value={index} 
                                    label={toyCategory} />
                                )) 
                            }
                            
                        </Tabs>
                    </Box>


                    <dir className='grid grid-cols-2 md:grid-cols-4 gap-3'>
                        {
                            filteredCategories.map(toy => <Category
                            key={toy._id}
                            toy={toy}
                            ></Category>)
                        }
                    </dir>

                </Box>



            </div>

        </div>
    );
};

export default ShopCategory;