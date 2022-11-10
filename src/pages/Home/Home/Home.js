import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import MyServices from '../Services/MyServices/MyServices';
import Service from '../Services/Service/Service';

const Home = () => {
    const {user} = useContext(AuthContext)
    useTitle('Home')
    return (
        <div>
            <Banner></Banner>
            <Service></Service>
            <About></About>
            {
                user && <MyServices></MyServices>
            }
            <Location></Location>
        </div>
    );
};

export default Home;