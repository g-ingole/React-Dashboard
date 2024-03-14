import React from 'react'
import './ReSet.css';
const ForgetPass = () => {
    return (
        <div>
            <div className="container-center">
                <center>
                    <img src={require('../../components/assets/forgot-password-4268397-3551744.png')} width="60%" alt='' />
                </center>
                <h2 className='txth2'>Don't Worry!</h2>
                <form action='' className='formgrp'>
                    <h4 className='headfrm'>
                        Just provide your email<br />
                        and we can do the rest
                    </h4>
                    <formgroup>
                        <input type="text" name="email" className='inpval' />
                        <label htmlFor="email" className='labhed'><br />Email</label>
                        <span className='spntxt'>enter your email</span>
                    </formgroup>
                    <button type="button" id="login-btn">Next</button>
                </form>
                <p className='ftrtxt'>Did you remember? <a href='/'>Sign In</a></p>
            </div>

        </div>

    )
}

export default ForgetPass
