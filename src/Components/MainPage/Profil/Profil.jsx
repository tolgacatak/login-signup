import { Link } from 'react-router-dom'
import './Profil.css'
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
const Profil = () => {
  return (
    <div className="profile-wrapper">
        <div className="profile-img">
            <img src={logo} alt="" />
        </div>
        <div className="profile-text">
            <span>Ad Soyad</span>
        </div>
        <div className="profile-btn">
            <Link className='profile-link' to="/profil-page">Profile Git</Link>
        </div>
    </div>
  )
}

export default Profil