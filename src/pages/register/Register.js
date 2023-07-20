import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = event => {
        event.preventDefault();
    }

    return (
        <div className="hero bg-base-200 w-full">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Please Register</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleRegister}>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary font-semibold" type="submit" value="Register" />
                            </div>
                            <p className='mt-3'>Already have an account? <Link className='text-blue-600 font-semibold underline hover:text-gray-600' to='/login'>Login.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;