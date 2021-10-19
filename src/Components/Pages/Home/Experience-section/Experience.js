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
               <p>Porta semper lacus cursus, feugiat primis ultrice in ligula risus auctor tempus feugiat dolor lacinia cubilia curae integer congue leo metus, eu mollislorem primis in orci integer metus mollis faucibus. An enim nullam tempor sapien gravida donec pretium and ipsum porta justo integer at velna vitae auctor integer congue</p>
               <img className='w-25 mt-2'src={signature} alt="" />
           </div>
       </div>
    );
};

export default Experience;