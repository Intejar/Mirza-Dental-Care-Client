import React from 'react';
import { FaTrashAlt } from "react-icons/fa";


const MyReviewCard = ({myReview, userEmail , handleDelete}) => {
    const {_id, review, dateAdded} = myReview;

    if(userEmail === review.email){
        return (
            <tr>
                <th>
                    <button className="btn btn-square btn-outline btn-orange ">
                        <FaTrashAlt onClick={() => handleDelete(_id)}  className='text-red-300'></FaTrashAlt>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">
                    
                            <div className="font-bold">{review.serviceName}</div>
                            <div className="text-sm opacity-50">{dateAdded}</div>
                    </div>
                </td>
                <td className=''>
                    <p>
                        {review.comment}
                    </p>
                </td>
                <th>
                    <h1>edit</h1>
                </th>
            </tr>
        );
    }
};

export default MyReviewCard;