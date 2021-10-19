import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MainService from './MainService';

const Service = () => {
    const [servicelist , setServicelist] = useState([])
    useEffect(()=>{
        fetch('/generated.json')
        .then(res=>res.json())
        .then(Data=> setServicelist(Data))
    },[])
    
    return (
        <div>
           <div className='my-5 '>
           <h2 className='text-center text-info d-block'>Services </h2>
           </div>
            <Row xs={1} md={3} className="g-1 mx-auto g-lg-5">
           {
               servicelist.map(allService=><MainService allItem={allService} key={allService.description}></MainService>)
           }
           </Row>

        </div>
    );
};

export default Service;