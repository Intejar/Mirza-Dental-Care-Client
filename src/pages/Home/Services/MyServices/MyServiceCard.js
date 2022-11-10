import React from 'react';
import { Link } from 'react-router-dom';

const MyServiceCard = ({userService}) => {
    const { serviceName, serviceImg } = userService

    return (
        <div className="card w-96 bg-base-100 shadow-xl image-full">
            <figure><img src={serviceImg} alt="Shoes" /></figure>
            <div className="card-body">
                <p>{serviceName}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to='/AddService'>Add More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default MyServiceCard;