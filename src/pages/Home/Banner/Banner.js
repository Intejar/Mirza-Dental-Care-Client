import React from 'react';
import logo from '../../../assests/images/dentist.jpg'
import logo2 from '../../../assests/images/MIRZA dr 1.png'
import Typed from 'react-typed';



const Banner = () => {

    return (
        <div className='w-3/4 mx-auto p-10 container'>
            <div className='grid grid-cols-2'>
                <img className='w-3/4 mx-auto' src={logo2} alt="dr_photo" />
                <div className='flex items-center'>
                    <div>
                        <h1 className='sm:text-2xl md:text-4xl font-bold'>Hello I am Dr Mirza</h1>
                        <h1 className='sm:text-xl md:text-2xl'>Dental Specialist</h1>
                        <div className='flex justify-around my-3'>
                            <p className='text-2xl'>
                                Get best care for
                            </p>
                            <Typed
                                strings={['Filling', 'Braces', 'Scaling', 'Pediatric']}
                                typeSpeed={120}
                                cursorStyle='_'
                                backSpeed={140}
                                loop
                                className='text-2xl font-bold'
                            />
                        </div>
                        <button className='btn btn-outline btn-ghost mt-5'>Get Appoinment</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;