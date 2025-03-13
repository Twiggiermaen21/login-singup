import React from 'react'
import './loginSingup.css';
import user_icon from '../assets/user.png';
import email_icon from '../assets/email.png';
import password_icon from '../assets/password.png';

const LoginSingup = () => {
    return (
        <div className='container'>
            <div className="header">
                <div className="text">Sing Up</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                <div className="input">
                    <img src={user_icon} alt="user" />
                    <input type="text" placeholder="Username" />
                </div>
                <div className="input">
                    <img src={email_icon} alt="email" />
                    <input type="text" placeholder="Email" />
                </div>
                <div className="input">
                    <img src={password_icon} alt="password" />
                    <input type="password" placeholder="Password" />
                </div>

            </div>
        </div>
    )
}

export default LoginSingup