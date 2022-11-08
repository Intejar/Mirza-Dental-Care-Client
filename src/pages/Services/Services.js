import React, { useEffect, useState } from 'react';
import ServiceCard from '../Home/Services/ServiceCard/ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='my-10'>
            <h1 className='text-3xl font-bold text-center'>Our services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    services.map(service => <ServiceCard service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;