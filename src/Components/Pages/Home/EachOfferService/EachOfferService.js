import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './EachOfferService.css'
const EachOfferService = (props) => {
    const {names,imgs, description} = props.item
    return (
        <Col>
      <Card className='h-100' style={{ width: '24rem' }}>
        <Card.Img className='w-100' style={{height:'250px'}} variant="top" src={imgs} />
        <Card.Body>
          <Card.Title>{names}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Link to={`/offerservices/${names}`}><Button className='w-100' variant="dark">See Details</Button></Link>
      </Card>
    </Col>
    );
};

export default EachOfferService;