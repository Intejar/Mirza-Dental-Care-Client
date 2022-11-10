import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const AddServiceCard = ({ service }) => {
    const { _id, title, img, description } = service
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const list = service.details;
    const price = service.price;
    const handleAddService = () =>{
        const addedService = {
            serviceId : _id,
            serviceName: title,
            serviceImg : img,
            userName : user.name,
            userEmail : user.email,
        }
        fetch('http://localhost:5000/userServices', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addedService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('your review has been added')
                navigate('/')
            })

    }

    return (
        <div className='hero w-3/4 bg-blue-300 mx-auto rounded-xl'>
            <div className="hero-content flex-col lg:flex-row">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div className='card-body'>
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
                <div className='card-actions justify-end'><button className="btn btn-outline btn-orange">Add service</button></div>
            </div>
        </div>
        </div>
    );
};

export default AddServiceCard;