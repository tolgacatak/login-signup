import './ProfilePage.css'
import NavbarAnasayfa from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import mail_icon from '../Assets/email.png'
import user_icon from '../Assets/person.png'
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    const handleFileChange = (e) => {
        /// dosya seçildiğinde yapılacaklar
    }
  return (
    <div>
        <NavbarAnasayfa/>
        <div className="profilepage-wrapper">
            <div className="hesap-ayarlari">
                <h1>Hesap Bilgileriniz</h1>
                <div className="inputs-profile-wrapper">
                    <div className="e-posta-adresi">
                        <img src={mail_icon} alt="" />
                        <label>
                            <input type="email" placeholder='E-Posta Adresiniz'/>
                        </label>
                    </div>           
                    <div className="isim-alani">
                    <img src={user_icon} alt="" />
                        <label>
                            <input type="text" placeholder='Adınız'/>
                        </label>
                    </div>
                    <div className="soyisim-alani">
                    <img src={user_icon} alt="" />
                        <label>
                            <input type="text" placeholder='Soyadınız'/>
                        </label>
                    </div>
                </div>
                <div className="hesap-foto">
                    <img src={logo} alt="" />
                        <label htmlFor="file-upload" className="custom-file-upload">
                            <p className='foto'>Fotoğrafı Değiştir</p>
                        </label>
                    <input id="file-upload" type="file" style={{display: 'none'}} onChange={handleFileChange}/>
                </div>

            </div>
            <div className="profil-sifre-yenile">
                 <Link to="/sifre-yenile" className="yenile-link"><p>Şifrenizi Yenileyin</p></Link>
            </div>

            <div className="profil-kaydet">
                <Link to="/mainpage" className="kaydet-link">Kaydet</Link> 
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default ProfilePage