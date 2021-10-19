import React from 'react';
import { Container } from 'react-bootstrap';
import footericon from '../../img/icon/logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <Container className='main-footer'>
            <div className='footer'>
            <div >
                <img className='img-footer' src={footericon} alt="" />
            </div>
            <div className='footer-discription'>
                <h5>Our Location</h5>
                    <p>121 King Street, Melbourne,</p>
                    <p>Victoria 3000 Australia</p>
                    <p>E: hello@medservice.com</p>
                    <p>P: +12 9 8765 4321</p>
            </div>

            </div>
            <p className='text-center'>© 2021 MedService. All Rights Reserved</p>
        </Container>
    );
};

export default Footer;