import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const about = useLoaderData()
    const { _id, title, img, description } = about
    const list = about.details;
    const price = about.price;

    return (
        <div>
            <div className="hero my-10 py-5 w-4/5 mx-auto bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='p-5  w-3/4'>
                        <img src={img} className='w-3/4  h-full rounded-md' alt="" />
                    </div>
                    <div className='w-1/2'>
                        <h1 className='text-4xl text-orange-600 font-bold'>{title} </h1>
                        <h1 className="text-2xl font-bold">{description}</h1>
                        <p className="py-6">
                            <h1>This is our package information:</h1>
                            <ul>
                                {
                                    list.map(li => <li>{li}</li>)
                                }
                            </ul>
                        </p>
                        <div>
                            <h1>Price Range:</h1>
                            <ul>
                                <li>For Age 1-12 yrs: ${price.child} </li>
                                <li>For Age 13-40 yrs: ${price.young} </li>
                                <li>For Age 41-older yrs: ${price.old} </li>
                            </ul>
                        </div>
                        <button className="btn btn-outline btn-orange ">Add service</button>
                    </div>
                </div>

            </div>
            <div>
                <h1 className='text-3xl text-center'>What Our Patient Say</h1>

                <div>
                    <button className='btn btn-primary'><Link to={`/review/${_id}`}>add review</Link></button>
                </div>

            </div>
                                
        </div>
    );
};

export default ServiceDetails;