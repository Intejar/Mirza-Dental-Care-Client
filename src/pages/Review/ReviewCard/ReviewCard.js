import React, { useState } from 'react';

const ReviewCard = ({userReview , title}) => {
    const {_id, review, dateAdded} = userReview
    if(title === review.serviceName){
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={review.photo} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{review.name}</div>
                        <div className="text-sm opacity-50">{review.email}</div>
                    </div>
                </div>
                <div className="card-body items-center text-center">
                    <p>{review.comment}</p>
                    <div className="justify-end">
                        <p>{dateAdded}</p>
                    </div>
                </div>
            </div>
        );
    }

    
};

export default ReviewCard;