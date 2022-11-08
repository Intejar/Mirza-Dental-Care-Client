import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import Service from '../Services/Service/Service';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            <Location></Location>
        </div>
    );
};

export default Home;