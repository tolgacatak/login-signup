import './ProfilePage.css'
import NavbarAnasayfa from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import mail_icon from '../Assets/email.png'
import user_icon from '../Assets/person.png'
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Loginmodal from '../Modals/Loginmodal'

const ProfilePage = () => {
    const[userName, setUserName] = useState("");
    const[nameSurname, setNameSurname] = useState("");
    const[email, setEmail] = useState("");
    const[error, setError] = useState(false);
    const [profilePictureUrl, setProfilePictureUrl] = useState(localStorage.getItem('profilePictureUrl') || logo);
    const [userInfo, setUserInfo] = useState({
        id: "",
        user: "",
        nameSurname: "",
        email: ""
    });

    const errorHandler = () => {
        setError(false);
    }
    
    const emailHandler = (e) => {
        setEmail(e.target.value);

    }
    const userNamehandler = (e) => {
        setUserName(e.target.value);
    }
    const nameSurnameHandler = (e) => {
        setNameSurname(e.target.value);
    }
    const saveProfile = async (e) => {
        e.preventDefault();
        if(userName.trim().length === 0 || nameSurname.trim().length === 0 || email.trim().length === 0){
            setError(
                {
                    title: "Hatalı Giriş",
                    message: "Lütfen ilgili alanları doldurunuz!"
                }
            );
            return;
        }
        try{
            axios.put('http://localhost:8087/users/updateUserInfo' , {
                id: localStorage.getItem('userId'),
                username: userName,
                nameSurname: nameSurname,
                email: email
            })
    }
    catch(e){
        setError(
            {
                title: "Hatalı Giriş",
                message: "Lütfen ilgili alanları doldurunuz!"
            }
        );
      }
    }
    const handleFileChange = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            console.error("Dosya seçilmedi.");
            return;
        }
    
        const formData = new FormData();
        formData.append('file', file);
    
        try {
            const userId = localStorage.getItem('userId');
            if (!userId) {
                throw new Error("Kullanıcı ID'si bulunamadı.");
            }
    
            const response = await axios.post(`http://localhost:8087/users/uploadProfilePicture?userId=${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            if (response.status === 200) {
                console.log("Profil resmi başarıyla yüklendi.");
                setProfilePictureUrl(URL.createObjectURL(file));
            } else {
                throw new Error("Profil resmi yüklenirken bir hata oluştu.");
            }
        } catch (error) {
            console.error("Hata:", error);
        }
    };
    
    

    
    
  return (
    <div>
        <NavbarAnasayfa/>
        {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="profilepage-wrapper">
            <div className="hesap-ayarlari">
                <h1>Hesap Bilgileriniz</h1>
                <div className="inputs-profile-wrapper">
                    <div className="e-posta-adresi">
                        <img src={mail_icon} alt="" />
                        <label>
                            <input type="email" placeholder='E-Posta Adresiniz' onChange={emailHandler}/>
                        </label>
                    </div>           
                    <div className="isim-alani">
                    <img src={user_icon} alt="" />
                        <label>
                            <input type="text" placeholder='Kullanıcı Adı' onChange={userNamehandler}/>
                        </label>
                    </div>
                    <div className="soyisim-alani">
                    <img src={user_icon} alt="" />
                        <label>
                            <input type="text" placeholder='Adınız' onChange={nameSurnameHandler}/>
                        </label>
                    </div>
                </div>
                <div className="hesap-foto">
                    <img src={profilePictureUrl} alt="Profil Resmi" />
                    <label htmlFor="file-upload" className="custom-file-upload">
                        <p className='foto'>Fotoğrafı Değiştir</p>
                    </label>
                    <input id="file-upload" type="file" style={{display: 'none'}} onChange={handleFileChange} />
                </div>

            </div>
            <div className="profil-sifre-yenile">
                 <Link to="/sifre-yenile" className="yenile-link" ><p>Şifrenizi Yenileyin</p></Link>
            </div>

            <div className="profil-kaydet">
                <Link to="/mainpage" className="kaydet-link"onClick={saveProfile}>Kaydet</Link> 
            </div>
            
        </div>
        <Footer/>
    </div>
  )
}

export default ProfilePage