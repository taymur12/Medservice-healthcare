import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const {signInwithGoogle} = useAuth();
    return (
        <div >
            <div className='form mx-auto d-block'>
            <h2>Login </h2>
            <form >
                <input className='w-25 p-2 my-3' type="email" name="email" id="" placeholder='Email' /><br />
                <input className='w-25 p-2 my-3' type="password" name="password" id="" placeholder='Password' /><br />
                <input className='btn-submit' type="submit" value="submit" />
                <p>New user? <Link to="/register">Register</Link></p>
            </form>
            </div>
            <button className='google-btn mx-auto d-block mt-3' onClick={signInwithGoogle}>Sign in with google</button>
        </div>
    );
};

export default Login;