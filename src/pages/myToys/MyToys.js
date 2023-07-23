import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const MyToys = () => {

    const { user } = useContext(AuthContext);
    const [sellers, setSellers] = useState([]);

    const url = `http://localhost:5000/sellers?email=${user?.email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setSellers(data);
            })
    }, []);

    return (
        <div className="overflow-x-auto mx-16 mt-8 mb-12">
            <p>seller: {sellers.length}</p>

        </div>
    );
};

export default MyToys;