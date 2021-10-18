import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import EachOfferService from '../EachOfferService/EachOfferService';
import './OfferService.css'
const OfferService = () => {
    const [services, setSrevices] = useState([])
    useEffect(()=>{
        fetch('/generated.json')
        .then(res=>res.json())
        .then(Data=> setSrevices(Data))
    },[])
    return (
        <div>
            <h1 className='text-center py-5 title-offer'>Services We Offer</h1>
            <Row xs={1} md={3} className="g-1 mx-auto g-lg-5">
            {
                services.map(service=><EachOfferService item={service} key={service.names}></EachOfferService>)
            }
            </Row>
        </div>
    );
};

export default OfferService;