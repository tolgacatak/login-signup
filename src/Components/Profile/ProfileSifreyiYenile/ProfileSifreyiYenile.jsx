import './ProfileSifreyiYenile.css'
import NavbarAnasayfa from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa'
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer'
import password_icon from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\password.png'
import { Link } from 'react-router-dom'

const ProfileSifreyiYenile = () => {
  return (
    <div>
      <NavbarAnasayfa/>
        <div className="sifre-yenile-wrapper">
          <div className="sifre-alanlari">
            <h1>Şifrenizi Yenileyin</h1>
            <div className="password-change-wrapper">
              <div className="eski-sifreniz">
                <label>
                  <img src={password_icon} alt="" />
                  <input type="password" placeholder='Eski Şifreniz'/>
                </label>
              </div>
              <div className="yeni-sifreniz">
                <label>
                  <img src={password_icon} alt="" />
                  <input type="password" placeholder='Yeni Şifreniz'/>
                </label>
              </div>
              <div className="yeni-sifreniz-tekrar">
                <label>
                  <img src={password_icon} alt="" />
                  <input type="password" placeholder='Yeni Şifrenizi Tekrar Girin'/>
                </label>
              </div>
              <div className="yeni-sifre-kaydet">
                <Link to="/mainpage" className='yeni-sifre-link'><button>Şifreyi Kaydet</button></Link>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default ProfileSifreyiYenile