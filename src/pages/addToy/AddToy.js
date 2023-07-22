import { Box, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const AddToy = () => {

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <div className='mx-16 mb-12 font-semibold'>

            <div className='my-6 text-center text-xl'>
                <h2 className='font-bold text-2xl'>Add Your Toys</h2>
                <p>Please fill the form to add your toys</p>
            </div>

            <form>
                <p className='mb-2'>Seller info</p>
                <div className='flex w-full gap-4 mb-5'>

                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" label="Seller Name" name="name" variant="outlined" className='w-full' />
                    </Box>
                    <Box
                        sx={{
                            width: '100%'
                        }}
                    >
                        <TextField required id="outlined-basic" name="email" label="Seller Email" variant="outlined" className='w-full' />
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
                            id="demo-simple-select"
                            defaultValue='car'

                            label="Category"
                            onChange={handleChange}
                        >
                            <MenuItem name='car' value='car' >Car</MenuItem>
                            <MenuItem name='truck' value='truck'>Truck</MenuItem>
                            <MenuItem name='tractor' value='tractor'>Tractor</MenuItem>
                            <MenuItem name='crane' value='crane'>Crane</MenuItem>
                            <MenuItem name='bus' value='bus'>Bus</MenuItem>
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

                <Link to='' className='btn w-full text-center bg-blue-700 p-2 rounded text-white hover:bg-blue-400'>Add Toy</Link>

            </form>


        </div>
    );
};

export default AddToy;