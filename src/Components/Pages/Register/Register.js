import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {signInwithGoogle} = useAuth()
    return (
        <div>
            <div >
            <div className='form mx-auto d-block'>
            <h2>Registration </h2>
            <form >
                <input className='w-25 p-2 my-3' type="email" name="email" id="" placeholder='Email' /><br />
                <input className='w-25 p-2 my-3' type="password" name="password" id="" placeholder='Password' /><br />
                <input className='btn-submit' type="submit" value="submit" />
                <p>Already Have Account? <Link to="/login">Register</Link></p>
            </form>
            </div>
            <button className='google-btn mx-auto d-block mt-3' onClick={signInwithGoogle}>Sign in with google</button>
        </div>
        </div>
    );
};

export default Register;