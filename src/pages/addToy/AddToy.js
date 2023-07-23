import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const toyCategory = [
    {category: 'Car'},
    {category: 'Truck'},
    {category: 'Tractor'},
    {category: 'Crane'},
    {category: 'Bus'},
]

const AddToy = () => {


    const {user} = useContext(AuthContext);

    const [category, setCategory] = useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
        const selectedCategory = toyCategory.find(list => list.category === event.target.value);
    };


    const handleAddToy = e => {
        e.preventDefault();


        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const toyname = form.toyname.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const add = { name, email, toyname, photo, quantity, price, rating, category, description }
        console.log(add);

        fetch('http://localhost:5000/sellers', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(add)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                alert('Added your toy successfully')
            }
            form.reset();
        })
    }



    return (
        <div className='mx-16 mb-12 font-semibold'>

            <div className='my-6 text-center text-xl'>
                <h2 className='font-bold text-2xl'>Add Your Toys</h2>
                <p>Please fill the form to add your toys</p>
            </div>

            <form onSubmit={handleAddToy}>
                <p className='mb-2'>Seller info</p>
                <div className='flex w-full gap-4 mb-5'>

                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" label="Seller Name" name="name" defaultValue={user?.displayName} variant="outlined" className='w-full' />
                    </Box>
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField type='email' required id="outlined-basic" name="email" defaultValue={user?.email} label="Seller Email" variant="outlined" className='w-full' />
                    </Box>
                </div>
                <p className='mb-2'>Toy info</p>
                <div className='flex w-full gap-4 mb-5'>

                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" label="Toy Name" name="toyname" variant="outlined" className='w-full' />
                    </Box>
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" name="photo" label="Toy Photo URL" variant="outlined" className='w-full' />
                    </Box>
                </div>
                <p className='mb-2'>Category & Quantity info</p>
                <div className='flex w-full gap-5 mb-5'>

                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Category</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select" required
                            name='category'
                            defaultValue={category}

                            label="Category"
                            onChange={handleChange}
                        >
                            {
                                toyCategory.map((list, index) => (
                                    <MenuItem key={index} value={list.category}>{list.category}</MenuItem>
                                ))
                            }
                            
                            
                        </Select>
                    </FormControl>
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" name="quantity" label="Quantity" variant="outlined" className='w-full' />
                    </Box>
                </div>
                <p className='mb-2'>Price & Rating info</p>
                <div className='flex w-full gap-4 mb-5'>

                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" label="Price" name="price" variant="outlined" className='w-full' />
                    </Box>
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" name="rating" label="Ratings" variant="outlined" className='w-full' />
                    </Box>
                </div>
                <p className='mb-2'>Product Description</p>
                <div className='w-full gap-4 mb-5'>

                    <Box
                        sx={{
                            width: '100%',
                        }}
                    >
                        <TextField required id="outlined-multiline-flexible" multiline maxRows={8} label="Description" name="description" variant="outlined" className='w-full ' />
                    </Box>

                </div>

                
                <input className='btn w-full text-center bg-blue-700 p-2 rounded text-white hover:bg-blue-400 level' type="submit" value="Add Toy" />

            </form>


        </div>
    );
};

export default AddToy;