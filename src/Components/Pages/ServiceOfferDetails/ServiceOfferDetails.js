import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceOfferDetails.css'

const ServiceOfferDetails = () => {
    const [details, setDetails] = useState([])
    const { servicename } = useParams()

    useEffect(() => {
        fetch('/generated.json')
            .then(res => res.json())
            .then(Data => setDetails(Data))
    }, [])

    const founddata = (details.find(element => element?.names === servicename))
    // console.log(founddata.names)

    return (
        <div>
            <h2 className='text-center py-5'>Here is service offer details</h2>
            <div className='detalisservice mx-auto d-block'>
                <img className='w-50 detailsImg mx-auto d-block' style={{ height: '250px' }} src={founddata?.imgs} alt="" fluid />
                <div className='p-4'>
                    <h4>Name of Service: <span>{founddata?.names}</span></h4>
                    <p>Details: {founddata?.description}</p>
                </div>
            </div>
            <div className='p-5'>
                <h2>Why you choose our {founddata?.names} service?</h2>
                <li>We Provide Excellent service</li>
                <li>WE offer quality Service and efficient doctors</li>
                <li>The price is not so high</li>
            </div>
        </div>
    );
};

export default ServiceOfferDetails;