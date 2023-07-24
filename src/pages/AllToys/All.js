import React from 'react';
import { Link} from 'react-router-dom';

const All = ({all}) => {

    const {_id, img, sellerName,  toyName, subCategory, price, availableQuantity } = all;

    return (
        
             <tbody className='h-36 text-[18px] font-semibold'>
                    {/* row 1 */}
                    <tr>
                        
                        <td>
                            <div className="flex items-center space-x-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-28 h-28">
                                        <img className='' src={img} alt="" />
                                    </div>
                                </div>
                            </div>
                        </td>
                        
                        <td>{sellerName}</td>
                        <td>{toyName}</td>
                        <td>{subCategory}</td>
                        <td>$ {price}.00 Only</td>
                        <td>{availableQuantity} PCS</td>
                        <th>
                            <Link to={`/view_details/${_id}`} className="btn bg-blue-500 btn-sm text-white hover:bg-gray-400">View Details</Link>
                        </th>
                    </tr>  
                    
                </tbody>
        
    );
};

export default All;