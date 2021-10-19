import React from 'react';
import { Table } from 'react-bootstrap';

const BookAppointment = () => {
    return (
        <div>
            <h2 className='my-5 text-center'>Schedule and Doctor List </h2>
            <div>
                <Table responsive striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Doctor Name</th>
                            <th>Speciality</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Dr Charles Aitken	</td>
                            <td>Psychiatry	</td>
                            <td>Sunday-Friday(6PM - 10PM)</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dr Hamish McLachlan	</td>
                            <td>General Practitioner	</td>
                            <td>Sunday-Friday(6PM - 10PM)</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Dr Nicholas Adams		</td>
                            <td>Emergency Medicine		</td>
                            <td>Sunday-Friday(2PM - 5PM)</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Dr Ekaterina Alibrahim		</td>
                            <td>Radiology		</td>
                            <td>Sunday-Friday(6PM - 10PM)</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Dr David Anderson		</td>
                            <td>Intensive Care Medicine		</td>
                            <td>Sunday-Friday(7PM - 10PM)</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Mr Edward Anstee		</td>
                            <td>Plastic Surgery		</td>
                            <td>Sunday-Friday(6PM - 8PM)</td>
                        </tr>
                        <tr>
                            <td>7</td>
                            <td>Dr Sean Arendse	</td>
                            <td>Emergency Medicine		</td>
                            <td>Sunday-Friday(4PM - 7PM)</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td colSpan="2">Dr Pieter Vriesendorp	</td>
                            <td>Vacation</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div style={{border:'1px solid lightgray' , padding:'25px',borderRadius:'20px'}} className='w-50 mx-auto my-5'>
                <p className='text-center'>We acknowledge the people of the Kulin Nation, the traditional custodians and pay our respects to their culture and their Elders past, present and emerging. We welcome all cultures, nationalities and religions. Being inclusive and providing equitable healthcare is our commitment.</p>

            </div>
        </div>
    );
};

export default BookAppointment;