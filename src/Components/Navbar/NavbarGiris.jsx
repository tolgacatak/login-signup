import { Link } from "react-router-dom"
import Logo from "../Assets/logo.jpeg"

const Navbar = () => {
  return (
    <div className="navbar">

                <div className='login-img'>
                    <img src={Logo}></img>
                </div>
                <div className="main-title">
                  <Link className="cicos" to="/">
                    <h1>AfetAnkaNET</h1>
                    </Link>
                </div>
                <div className='rightSide'>
                    <Link to="/login" className="giris"> Giriş</Link>
                    <Link to="/register"  className="kayitol"> Kayıt</Link>
                </div>
            </div>
  )
}

export default Navbar