import React, { useState } from 'react'
import './LoginSignUp.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import logo from '../Assets/logo.jpeg'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

import Register from '../Register/Register'

// import Register from './Register';


const LoginSignUp = () => {
    const [action, setAction] = useState("Giriş Yap");
    const [showRegister, setShowRegister] = useState(false);

    return (
        <div className='container2'>
            <div className="logo2">
                <img src={logo} alt="" />
            </div>
            <div className="header2">

                <div className="text2">
                    {action}
                </div>

                
            </div>
            <div className="inputs2">
                <div className="input2">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Kullanıcı Adı' />
                </div>

                <div className="input2">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='*******' />
                </div>

            </div>
            <div className="forgot-password2">Şifrenizi mi Unuttunuz? <span>
                <Link to="/forgetpassword">
                    Buraya Tıklayın!
                </Link></span>
            </div>

            <div className="submit-container2">
                <Link to="/" className="submit">
                    Giriş Yap
                </Link>
                <Link to="/register" className="submit">
                    Kayıt Ol
                </Link>

            </div>
        </div>
    )
}
export default LoginSignUp