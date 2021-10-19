import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import doctor1 from '../../../img/Doctor/doctor-1.jpg'
import doctor2 from '../../../img/Doctor/doctor-2.jpg'
import doctor3 from '../../../img/Doctor/doctor-3.jpg'

const Doctor = () => {
    return (
        <div className='mt-5 '>
            <h2 className='text-center '>Our doctors work across a range of services and clinics at our hospitals and community locations.</h2>
            <div className='w-75 mx-auto mt-5'>
            <CardGroup>
  <Card>
    <Card.Img variant="top" src={doctor1} />
    <Card.Body>
      <Card.Title>Mr Joseph Kong</Card.Title>
      <Card.Text>
      The rare blood clotting syndrome linked to the AstraZeneca vaccine can easily be diagnosed and is very treatable, according to experts from The Alfred.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Speciality: Dermatology</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={doctor2} />
    <Card.Body>
      <Card.Title>Dr Iain Abbott</Card.Title>
      <Card.Text>
      Not only is Rami celebrating his birthday this World No Tobacco Day (WNTD), he’s celebrating his 67th day smoke free.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Speciality: Cardiology	 </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={doctor3} />
    <Card.Body>
      <Card.Title>Dr David Anderson	</Card.Title>
      <Card.Text>
      That was April last year, and Melbourne was in lockdown chaos. But Patricia McCabe had a much more personal crisis happening – she’d just found a lump under her arm, and it was breast cancer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Speciality: Cardiology</small>
    </Card.Footer>
  </Card>
</CardGroup>
            </div>

        </div>
    );
};

export default Doctor;