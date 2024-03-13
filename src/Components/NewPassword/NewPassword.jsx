import React, { useState } from 'react';
import logo from '../Assets/logo.jpeg';
import './NewPassword.css';
import { Link } from 'react-router-dom';
import Loginmodal from '../Modals/Loginmodal';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const NewPassword = () => {
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');
    const [error, setError] = useState(false);
    const location = useLocation();
    const { email: email } = location.state || {}; // Email'i location.state'ten al

    const errorHandler = () => {
        setError(false);
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value);
      }
      const passwordAgainHandler = (e) => {
        setPasswordAgain(e.target.value);
      }
      const savePasswordHandler = async (e) => {
        
        e.preventDefault();
        console.log("dodo")
        if(password.trim().length === 0 || passwordAgain.trim().length === 0){
          console.log("if 1")
          setError(
            {
                title: "Hatalı Giriş",
                message: "Lütfen ilgili alanları doldurunuz!"
            }
          );
          return;
        }
        if(password !== passwordAgain){
          console.log("if 2")
          setError(
            {
                title: "Hatalı Giriş",
                message: "Şifreler uyuşmuyor!"
            }
          );
          setPassword("");
          setPasswordAgain("");
          return;
        }
        try{
          await axios.put('http://localhost:8087/users/updatePassword' , {
            email : email,
            newPassword: password
          })
          if (
            window.confirm(
              "Şifreniz başarıyla değiştirildi. Yeni şifrenizle giriş yapmak ister misiniz?"
            )
          ) {
            window.location.href = "/login";
          }
          
          }
          catch (error) {
            setError(
              {
                  title: "Hatalı Giriş",
                  message: "Bir hata oluştu!"
              }
          );
        }
        finally{
          setPassword("");
          setPasswordAgain("");
        }
      }

    

    return (
        <div className="tlg">
            {error && <Loginmodal onConfirm={errorHandler} error={error} />}
            <div className="logo-new">
                <img src={logo} alt="" />
            </div>
            <div className="new-header">
                <h2>Şifrenizi Yenileyin</h2>
                <div className="new-underline"></div>
            </div>
            <div className="new-password">
                <div className="password1">
                    <label>
                        <input type="password" value={password} onChange={passwordHandler} placeholder='Yeni Şifre' onPaste={(e) => e.preventDefault()} />
                    </label>
                </div>
                <div className="password2">
                    <div >
                        <label>
                            <input type="password" value={passwordAgain} onChange={passwordAgainHandler} placeholder='Şifreyi Tekrar Giriniz' onPaste={(e) => e.preventDefault()} />
                        </label>
                    </div>
                </div>
                <Link to="/login" className="submit-new" onClick={savePasswordHandler}>
                    <button type="submit">Şifreyi Kaydet</button>
                </Link>
            </div>

        </div>

    );
};

export default NewPassword;
