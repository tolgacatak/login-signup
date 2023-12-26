import React, { useState } from 'react'
import './Register.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import mail_icon from '../Assets/email.png'
import logo from '../Assets/logo.jpeg'
import { Link } from 'react-router-dom'

const Register = () => {
    const [action, setAction] = useState("Kayıt Ol");

    return (
        <div className="container">

            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="header">

                <div className="text">
                    {action}
                </div>
                
            </div>

            <div className="line"></div>
            <div className="inputs">
                <div className="input">
                    <img src={mail_icon} alt="" />
                    <input type='mail' placeholder='valid_mail_address@mail.com' />
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Kullanıcı Adı' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='*******' />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Correct Password' />
                </div>


            </div>
            <div className="submit-container">
                <Link to="/login" className="submit">
                    Giriş Yap
                </Link>
                <Link to="/" className="submit">
                    Kayıt Ol
                </Link>
            </div>
        </div>
    )
}
export default Register