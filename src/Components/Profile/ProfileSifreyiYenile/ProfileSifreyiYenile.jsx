import './ProfileSifreyiYenile.css'
import NavbarAnasayfa from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa'
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer'
import password_icon from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\password.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Loginmodal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\Loginmodal'
import axios from 'axios'

const ProfileSifreyiYenile = () => {
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [error, setError] = useState(false);

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
        userId: localStorage.getItem('userId'),
        newPassword: password
      })
      console.log(password);
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
    <div>
      <NavbarAnasayfa/>
      {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="sifre-yenile-wrapper">
        
          <div className="sifre-alanlari">
            <h1>Şifrenizi Yenileyin</h1>
            <div className="password-change-wrapper">
              <div className="yeni-sifreniz" >
                <label>
                  <img src={password_icon} alt="" />
                  <input value={password} type="password" placeholder='Yeni Şifreniz' onChange={passwordHandler}/>
                </label>
              </div>
              <div className="yeni-sifreniz-tekrar">
                <label>
                  <img src={password_icon} alt="" />
                  <input type="password" value={passwordAgain} placeholder='Yeni Şifrenizi Tekrar Girin' onChange={passwordAgainHandler}/>
                </label>
              </div>
              <div className="yeni-sifre-kaydet">
                <Link to="/mainpage" className='yeni-sifre-link' ><button onClick={savePasswordHandler}>Şifreyi Kaydet</button></Link>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ProfileSifreyiYenile