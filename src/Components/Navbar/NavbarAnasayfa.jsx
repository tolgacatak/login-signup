import './NavbarAnasayfa.css'
import logo from '../Assets/logo_navbar.jpg'
import { Link } from 'react-router-dom'

const NavbarAnasayfa = () => {
  return (
    <nav>
    <div className="nav-bar">
        <div className="img-navbar">
            <img src={logo} alt="" />
        </div>
        <div className="afetanka-navbar">
            <Link className="link1" to="/">
                <span>AfetAnkaNet</span>
            </Link>
        </div>
        <div className="buttons-navbar">
            <Link className="link2" to="/button1">Canlı Afet Haritası</Link>
            <Link className="link3" to="/button2">Afet Haberleri</Link>
            <Link className="link4" to="/button3">Yardımlaşma Platformu</Link>
            <Link className="link5" to="/button4">Acil Durum Bilgileri</Link>
        </div>
        <div className="exit">
            <button>Çıkış</button>
        </div>
    </div>
    

</nav>
  )
}

export default NavbarAnasayfa