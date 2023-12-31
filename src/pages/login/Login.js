import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
    const { signIn, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)


        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true });
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div className="hero bg-base-200 w-full">
            <div className="hero-content flex-col w-1/2">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Please Login</h1>
                </div>
                <div className="card w-full border bg-base-100">
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
                
                <Link onClick={handleSignInWithGoogle} className="btn btn-outline border-2 normal-case text-xl text-[#0d6efd] hover:bg-[#0d6efd] w-full mb-6" type="submit"><FaGoogle /> Sign-in With Google</Link>
            </div>

        </div >
    );
};

export default Login;