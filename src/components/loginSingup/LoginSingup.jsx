import React from 'react'
import './LoginSingup.css';
import user_icon from '../Assets/person.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/password.png';

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
                    <input type="email" placeholder="Email" />
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