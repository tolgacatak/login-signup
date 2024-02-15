import React, { useState } from 'react'
import './Register.css'
import user_icon from '../Assets/person.png'
import password_icon from '../Assets/password.png'
import mail_icon from '../Assets/email.png'
import logo from '../Assets/logo.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import Loginmodal from '../Modals/Loginmodal'
import axios from 'axios'

const Register = () => {
    const [action, setAction] = useState("Kayıt Ol");
    const [error, setError] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [mail, setMail] = useState("");
    const [password2, setPassword2] = useState("");
    

    

    const errorHandler = () => {
        setError(false);
    }

    const userHandler = (e) => {
        setUser(e.target.value);
    }
    const paswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const mailHandler = (e) => {
        setMail(e.target.value);
    }
    const paswordHandler2 = (e) => {
        setPassword2(e.target.value);
    }

    const registerPageHandler = async (e) => {
        e.preventDefault();
        if (user.trim().length === 0 || password.trim().length === 0 || mail.trim().length === 0 || password2.trim().length === 0) {
            setError(
                {
                    title: "Hatalı Giriş",
                    message: "Lütfen ilgili alanları doldurunuz!"
                }
            );
            return;
        }
        if(password !== password2){
            setError(
                {
                    title: "Hatalı Giriş",
                    message: "Şifreler uyuşmuyor!"
                }
            );
            setPassword("");
            setPassword2("");
            return;
        }
        try{
            const response = await axios.post("/users/register", {
                username: user,
                password: password,
                email: mail
                });
                if(response.status === 200){
                    setError(
                        {
                            title: "Başarılı",
                            message: "Kayıt işlemi başarılı!"
                        }
                    );
                    setError(null);
                     navigate("/login");
                }
                else {
                    throw new Error("Kayıt işlemi başarısız!");
                    
                } 
        } catch (error) {
            console.log(error.response);
            
            setError(
                {
                    title: "Hatalı Giriş",
                    message: error.message
                }
            );
        }
    }


    const navigate = useNavigate();

    return (
        <div className="container">
            {error && <Loginmodal onConfirm={errorHandler} error={error} />}

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
                    <input type='mail' placeholder='valid_mail_address@mail.com' onChange={mailHandler} value={mail}/>
                </div>
                <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder='Kullanıcı Adı' onChange={userHandler} value={user}/>
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='*******' onChange={paswordHandler} value={password} />
                </div>
                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='Correct Password' onChange={paswordHandler2} value={password2} />
                </div>


            </div>
            <div className="submit-container">
                <Link to="/login" className="submit">
                    Giriş Yap
                </Link>
                <button className="submit" onClick={registerPageHandler}>
                    Kayıt Ol
                </button>
            </div>
        </div>
    )
}
export default Register