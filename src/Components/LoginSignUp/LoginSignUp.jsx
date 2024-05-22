import React, { useState } from 'react';
import './LoginSignUp.css';
import user_icon from '../Assets/person.png';
import password_icon from '../Assets/password.png';
import logo from '../Assets/logo.jpeg';
import { useNavigate, Link } from 'react-router-dom';
import Loginmodal from '../Modals/Loginmodal';
import axios from 'axios';

const LoginSignUp = () => {
    const [action, setAction] = useState("Giriş Yap");
    const [isLogin, setIsLogin] = useState(false);
    const [error, setError] = useState(false);
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [id, setId] = useState("");

    const navigate = useNavigate();

    const errorHandler = () => {
        setError(false);
    }

    const userHandler = (e) => {
        setUser(e.target.value);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    }

    const loginPageHandler = async (e) => {
        e.preventDefault();
        if (user.trim().length === 0 || password.trim().length === 0) {
            setError(
                {
                    title: "Hatalı Giriş",
                    message: "Kullanıcı adı veya şifre boş bırakılamaz!"
                }
            );
            return;
        } 
        try{
            const login = await axios.post("http://localhost:8087/users/login",{
                username: user,
                password: password,
            });
            if(login.status === 200){
                localStorage.setItem('userId', login.data.id);
                setError(null);
                navigate("/mainpage");
            }else{
                throw new Error("Giriş işlemi başarısız");
            }
        }catch (error){
            setError({
                title: "Hatalı Giriş",
                message: "Giriş Gerçekleşemedi! Lütfen bilgilerinizi kontrol edin!"
            });
        }
        
    }
    

    return (
        <div className='container2'>
            {error && <Loginmodal onConfirm={errorHandler} error={error} />}

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
                    <input type="text" placeholder='Kullanıcı Adı' onChange={userHandler} value={user} />
                </div>

                <div className="input2">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder='*******' onChange={passwordHandler} value={password} />
                </div>
            </div>
            <div className="forgot-password2">Şifrenizi mi Unuttunuz? <span>
                <Link to="/forgetpassword">
                    Buraya Tıklayın!
                </Link></span>
            </div>

            <div className="submit-container2">
                <button className="submit" onClick={loginPageHandler}>
                    Giriş Yap
                </button>
                <Link to="/register" className="submit">
                    Kayıt Ol
                </Link>
            </div>
        </div>
    )
}

export default LoginSignUp;
