import React from 'react';
import { Container } from 'react-bootstrap';
import errorImg from '../../img/notfound/404.gif'
const Page404 = () => {
    return (
        <Container>
            <img width="100%" src={errorImg} alt="" />
        </Container>
    );
};

export default Page404;