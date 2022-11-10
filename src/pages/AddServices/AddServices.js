import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AddServiceCard from './AddServiceCard';

const AddServices = () => {
    const services = useLoaderData()

    return (
        <div className="grid grid-cols-1 space-y-20">
            {
                services.map(service => <AddServiceCard key={service._id} service={service}></AddServiceCard>)
            }
        </div>
    );
};

export default AddServices;