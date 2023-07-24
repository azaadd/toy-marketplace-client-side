import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const toyCategory = [
    { categorys: 'Car' },
    { categorys: 'Truck' },
    { categorys: 'Tractor' },
    { categorys: 'Crane' },
    { categorys: 'Bus' },
]


const UpdateToy = () => {

    const updateToy = useLoaderData();
    const { _id, rating, toyname, photo, description, quantity, price, category } = updateToy;


    const { user } = useContext(AuthContext);

    const [categorys, setCategorys] = useState('');

    const handleChange = (event) => {
        setCategorys(event.target.value);
        const selectedCategory = toyCategory.find(list => list.categorys === event.target.value);
    };


    const handleUpdateToy = e => {
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

        const update = { name, email, toyname, photo, quantity, price, rating, category, description }
        console.log(update);

        Swal.fire({
            title: 'Are you sure?',
            text: "You want to update it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, update it!'
        })
            .then((result) => {
                if (result.isConfirmed) {

                    fetch(`http://localhost:5000/sellers/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(update)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data);
                            if (data.modifiedCount > 0) {
                                Swal.fire(
                                    'Updated!',
                                    'Your Toy has been updated successfully.',
                                    'success'
                                )
                            }
                            
                            form.reset();
                        })
                }
            })
        }

                return (
                    <div className='mx-16 mb-12 font-semibold'>

                        <div className='my-6 text-center text-xl'>
                            <h2 className='font-bold text-2xl'>Update Your Toys</h2>
                            <p>Please fill the form to update your toys</p>
                        </div>

                        <form onSubmit={handleUpdateToy}>
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
                                    <TextField required id="outlined-basic" label="Toy Name" name="toyname" defaultValue={toyname} variant="outlined" className='w-full' />
                                </Box>
                                <Box
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <TextField required id="outlined-basic" name="photo" defaultValue={photo} label="Toy Photo URL" variant="outlined" className='w-full' />
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
                                                <MenuItem key={index} value={list.categorys}>{list.categorys}</MenuItem>
                                            ))
                                        }


                                    </Select>
                                </FormControl>
                                <Box
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <TextField required id="outlined-basic" name="quantity" defaultValue={quantity} label="Quantity" variant="outlined" className='w-full' />
                                </Box>
                            </div>
                            <p className='mb-2'>Price & Rating info</p>
                            <div className='flex w-full gap-4 mb-5'>

                                <Box
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <TextField required id="outlined-basic" label="Price" name="price" defaultValue={price} variant="outlined" className='w-full' />
                                </Box>
                                <Box
                                    sx={{
                                        width: '100%'
                                    }}
                                >
                                    <TextField required id="outlined-basic" name="rating" defaultValue={rating} label="Ratings" variant="outlined" className='w-full' />
                                </Box>
                            </div>
                            <p className='mb-2'>Product Description</p>
                            <div className='w-full gap-4 mb-5'>

                                <Box
                                    sx={{
                                        width: '100%',
                                    }}
                                >
                                    <TextField required id="outlined-multiline-flexible" multiline maxRows={8} label="Description" name="description" defaultValue={description} variant="outlined" className='w-full ' />
                                </Box>

                            </div>


                            <input className='btn w-full text-center bg-blue-700 p-2 rounded text-white hover:bg-blue-400 level' type="submit" value="Update Toy" />

                        </form>


                    </div>
                );
            };

        export default UpdateToy;