import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorGift from '../assets/404.gif'

export default function ErrorPage() {
    const error = useRouteError();

    return (
        <div className='max-w-6xl mt-16 mx-auto'>
            <div id="error-page" className="items-center m-5">
                <div className="text-center mx-auto items-center">
                    <img className="rounded w-96 mx-auto text-center" src={errorGift} alt="" />
                    <div className="mt-4">
                        <h2 className="font-bold">Page Not Found</h2>
                        <button className="btn btn-primary ms-5">
                            <a>
                                
                                <span>
                                    <Link className="text-white text-2xl" to="/">Go Home</Link>
                                </span>
                            </a>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

