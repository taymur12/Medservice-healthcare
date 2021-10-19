import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const {signInwithGoogle, emailHandle, passwordHandle, registerProcess, error} = useAuth()
    return (
        <div>
            <div >
            <div className='form mx-auto d-block'>
            <h2>Registration </h2>
            <p className='text-danger'>{error}</p>
            <form onSubmit={registerProcess}>
                <input onBlur={emailHandle} className='w-25 p-2 my-3' type="email" name="email" id="" placeholder='Email' required/><br />
                <input onBlur={passwordHandle} className='w-25 p-2 my-3' type="password" name="password" id="" placeholder='Password' required /><br />
                <input className='btn-submit' type="submit" value="submit" />
                <p>Already Have Account? <Link to="/login">Login</Link></p>
            </form>
            </div>
            <button className='google-btn mx-auto d-block mt-3' onClick={signInwithGoogle}>Sign in with google</button>
        </div>
        </div>
    );
};

export default Register;