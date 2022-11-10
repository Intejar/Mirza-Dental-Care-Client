import React, { useContext } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddReview = () => {
    const data = useLoaderData();
    const { user } = useContext(AuthContext)
    const {photoURL} = user
    const { _id, title } = data
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const comment = form.comment.value;
        const review = {
            serviceId: _id,
            serviceName: title,
            photo,
            name,
            email,
            comment
        }
        fetch('http://localhost:5000/review', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('your review has been added')
                form.reset()
                navigate(`/services/${_id}`)
            })

        console.log(review)

    }
    return (
        <div>
            <h1>You reviewed : {title}</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-control w-3/4 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input type="text" name='name' placeholder="Type your name here" defaultValue={user?.displayName} className="input input-bordered input-warning w-full " />
                    <input type="text" name='email' placeholder="Type your email here here" defaultValue={user?.email} className="input input-bordered input-warning w-full " />
                    <input type="text" name='photo' placeholder="Type your email here here" defaultValue={user?.photoURL} className="input input-bordered input-warning w-full " />
                    <textarea name='comment' className="textarea textarea-warning" placeholder="Type your experience"></textarea>
                </div>
                <div className='form-control w-1/2 mx-auto my-10'>
                    <button className='btn btn-outline btn-orange'>add review</button>
                </div>
            </form>
        </div>
    );
};

export default AddReview;