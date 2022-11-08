import React from 'react';

const Location = () => {

    return (
        <div className=''>
            <h1 className='text-2xl text-center'>Chember Location</h1>
            <iframe
                className='mx-auto my-10'
                src="https://maps.google.com/maps?q=Mirpur,Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="600"
                height="400"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </div>
    );
};

export default Location;