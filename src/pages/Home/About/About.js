import React from 'react';
import img1 from '../../../assests/images/dentist.jpg'

const About = () => {
    return (
        <div className="hero my-10 py-5 w-4/5 mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className='p-5  w-3/4'>
                    <img src={img1} className='w-3/4  h-full rounded-md' alt="" />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-xl text-orange-600 font-bold'>About Us</h1>
                    <h1 className="text-2xl font-bold">We are qualified and of experienced in this field</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-outline btn-orange ">Get More INfo</button>
                </div>
            </div>
        </div>
    );
};

export default About;