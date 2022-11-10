import React, { useState } from 'react';

const ReviewCard = ({userReview, title}) => {
        const {serviceName, photo, name , email, comment, date } = userReview
        if(title === serviceName){
            return (
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={photo} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">{email}</div>
                        </div>
                    </div>
                    <div className="card-body items-center text-center">
                        <p>{comment}</p>
                        <div className="justify-end">
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            );
        }

        
    

    
};

export default ReviewCard;