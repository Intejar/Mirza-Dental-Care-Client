import React from 'react';
import { PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';


import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, description } = service
    return (
        <div className="card p-5 card-compact w-80 mx-auto bg-base-100 shadow-xl">
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-2xl font-bold">{title}</h2>
                <h2 className="card-title text-xl">{description}</h2>
                <div className='flex card-align'>
                    <p className='text-xl text-orange-600 font-bold'>price: $</p>
                    <div className="card-actions">
                        <Link to={`/services/${_id}`}><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;