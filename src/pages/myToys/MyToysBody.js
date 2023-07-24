import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const MyToysBody = ({ seller, handleDelete }) => {

    const {
        _id, toyname, photo, quantity, price, category
    } = seller;

    

    return (
        <tbody className='h-36 text-[18px] font-semibold'>
            {/* row 1 */}
            <tr>

                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-28 h-28">
                                <img className='' src={photo} alt="" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>{toyname}</td>
                <td>{category}</td>
                <td>$ {price}.00 Only</td>
                <td>{quantity} PCS</td>

                <th>
                    <Link to={`/update/${_id}`} className="btn bg-green-600 btn-sm text-white hover:bg-gray-400"><FaEdit /> Edit</Link>

                    <Link onClick={() => handleDelete(_id)} to='' className="btn bg-red-600 btn-sm text-white hover:bg-gray-400 ml-1"><FaTrash /> Delete</Link>
                </th>
            </tr>

        </tbody>
    );
};

export default MyToysBody;