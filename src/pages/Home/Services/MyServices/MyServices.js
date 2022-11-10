import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../../hooks/useTitle';
import MyServiceCard from './MyServiceCard';

const MyServices = () => {
    
    const [userServices, setUserService] = useState([])
    const {user} = useContext(AuthContext)
    useTitle('services')
    useEffect(()=>{
        fetch(`https://y-five-psi.vercel.app/userservices?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setUserService(data))

    },[user?.email])
    return (
        <div>
            <h1 className='text-2xl text-center font-bold'>{user.name} added services</h1>
            <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 mx-auto'>
            {
                userServices.map(userService => <MyServiceCard key={userService._id} userService={userService}></MyServiceCard>)
            }
            
        </div>
        </div>
    );
};

export default MyServices;