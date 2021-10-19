import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import headericon from '../../img/icon/logo.png'
import './Header.css'
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const navStyle = {
        fontWeight: "bold",
        color: "rgb(240,193,75)",
        borderBottom: '1px solid rgb(240,193,75)'
    }
    const {user, logoutProcess} = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Container>
                    <Link>
                    <img width="200px" src={headericon} alt="" />
                    </Link>
                    <Navbar.Toggle  aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="mr-auto my-lg-0 ms-lg-auto text-center">
                        <NavLink className='nav-item' activeStyle={navStyle} to="/home">Home</NavLink>
                        <NavLink className='nav-item' activeStyle={navStyle} to="/service">Services</NavLink>
                        {
                            user.email && <NavLink className='nav-item' activeStyle={navStyle} to="/doctor">Doctors</NavLink>
                        }
                        
                        {
                            user.email? <button onClick={logoutProcess}>Logout</button> : <NavLink className="nav-item" activeStyle={navStyle} to="/login">Login</NavLink>
                        }
                        {
                            user.email && <span className="text-white ms-2">Hi {user.displayName}</span>
                        }
                         <NavLink className="nav-item nav-book ms-2" to="/bookappointment">Book Appointment</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;

//me-auto text-center