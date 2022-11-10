import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import MyServiceCard from './MyServiceCard';

const MyServices = () => {
    const [userServices, setUserService] = useState([])
    const {user} = useContext(AuthContext)
    useEffect(()=>{
        fetch(`http://localhost:5000/userservices?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setUserService(data))

    },[user?.email])
    return (
        <div>
            {
                userServices.map(userService => <MyServiceCard key={userService._id} userService={userService}></MyServiceCard>)
            }
            
        </div>
    );
};

export default MyServices;