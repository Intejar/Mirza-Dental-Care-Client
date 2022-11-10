import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard/ServiceCard';

const Service = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center'>Our services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
            <div className='flex justify-center mt-4'><button className='btn btn-primary'><Link to='/services'>see all</Link></button></div>
        </div>
    );
};

export default Service;