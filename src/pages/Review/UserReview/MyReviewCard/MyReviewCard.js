import React, { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";


const MyReviewCard = ({ myReview, handleDelete, handleEdit }) => {
    const { _id, serviceName, date, comment } = myReview;
    const [editComment, setEditComment] = useState(comment)
    const handleComment = (event) => {
        event.preventDefault()
        const id = _id;
        const newComment = event.target.edit.value;
        setEditComment(newComment)

        console.log(id, newComment)

        handleEdit(id, newComment)

        event.target.reset()

    }

    if (myReview) {
        return (
            <tr>
                <th>
                    <button className="btn btn-square btn-outline btn-orange ">
                        <FaTrashAlt onClick={() => handleDelete(_id)} className='text-red-300'></FaTrashAlt>
                    </button>
                </th>
                <td>
                    <div className="flex items-center space-x-3">

                        <div className="font-bold">{serviceName}</div>
                        <div className="text-sm opacity-50">{date}</div>
                    </div>
                </td>
                <td className=''>
                    <textarea name='edit' className="textarea textarea-warning" defaultValue={editComment}></textarea>
                </td>
                <th>
                    <label htmlFor="my-modal" className="btn">edit</label>
                    <input type="checkbox" id="my-modal" className="modal-toggle" />
                    <form onSubmit={handleComment} className="modal">
                        <div className="form-control modal-box">
                            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <textarea name='edit' className="textarea textarea-warning" placeholder={comment}></textarea>
                            <div className="form-control modal-action">
                                <button className='btn btn-outline btn-orange'>save changes</button>
                            </div>
                        </div>
                    </form>

                </th>
            </tr >
        );
    }
    else {
        return <div className='flex justify-center'> <h1 className='text-5xl font-bold'>No review added</h1> </div>
    }

};

export default MyReviewCard;