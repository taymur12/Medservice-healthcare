import React from 'react';
import Experience from './Experience-section/Experience';
import Landing from './Landling/Landing';
import OfferService from './OfferService/OfferService';

const Home = () => {
    return (
        <div>
            <Landing></Landing>
            <OfferService></OfferService>
           <Experience></Experience>
        </div>
    );
};

export default Home;