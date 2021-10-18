import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import slideimg1 from '../../../img/backgoundcover/slide-4.jpg'
import slideimg2 from '../../../img/backgoundcover/slide-5.jpg'
import slideimg3 from '../../../img/backgoundcover/slide-6.jpg'

const Landing = () => {
    return (
        <div>
          <Carousel fade nextIcon prevIcon>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideimg1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h2>TOP CLASS MEDICAL CENTER</h2>
      <p>The MedService Hospital, also known as The Alfred or Alfred Hospital, is a leading tertiary teaching hospital in Melbourne, Victoria. .</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideimg2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h2>HIGH-CLASS PROFESSIONALS</h2>
      <p>Specialist physicians are experts in preventing, diagnosing, and treating diseases, physiological and psychiatric disorders, and injuries.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={slideimg3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h2>TAKE CARE OF YOUR HEALTH</h2>
      <p>Live Healthy, eat healthy foods, get enough sleep, exercise regularly, and avoid drugs and alcohol. Manage stress and go for regular medical check-ups.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Landing;