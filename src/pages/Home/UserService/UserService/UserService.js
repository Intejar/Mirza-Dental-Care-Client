import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import UserServiceCard from './UserServiceCard';

const UserService = () => {
    const {user} = useContext(AuthContext)
    const [services, setServices] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/userServices?email=${user.email}`)
        .then(res => res.json())
        .then(data => setServices(data))
    },[user.email])
    return (
        <div>
            <h1 className='text-3xl text-center'>{user.name} Services</h1>
            <div>
                {
                    services.map(service => <UserServiceCard key={service._id} service={service}></UserServiceCard>)
                }
            </div>
            
        </div>
    );
};

export default UserService;