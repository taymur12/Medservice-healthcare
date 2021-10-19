import React from 'react';
import signature from '../../../img/extra/signature.png'
import imgexper from '../../../img/extra/image-01.png'
const Experience = () => {
    return (
       <div className='w-50 mx-auto mt-5'>
           <img width="100%" src={imgexper} alt="" fluid />
           <div className='my-5 w-100'>
           <h5 className='text-info'>QUALIFIED DOCTORS</h5>
                <h3>Group of Certified and Experienced Doctors</h3>
               <p>The public hospitals in Australia are managed by state and territory health departments. They are financed jointly by the government, state, and territory authorities. There is a boom of private hospital operators in Australia and a few of the public Australian hospitals are run by private companies under a contract.</p>
               <img className='w-25 mt-2'src={signature} alt="" />
           </div>
       </div>
    );
};

export default Experience;