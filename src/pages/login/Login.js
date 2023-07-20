import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const handleLogin = event => {
        event.preventDefault();
    }


    return (
        <div className="hero bg-base-200 w-full">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Please Login</h1>
                </div>
                <div className="card w-full shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
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
                                <input className="btn btn-primary font-semibold" type="submit" value="Login" />
                            </div>
                            <p className='mt-3'>Don't have any account? <Link className='text-blue-600 font-semibold underline hover:text-gray-600' to='/register'>Register.</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;