import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import twitter from '../Assets/twitter.png'
import instagram from '../Assets/instagram.png'
import facebook from '../Assets/facebook.png'
const Footer = () => {
  return (
    <div className="footer-container">
        <div className="hakkimizda">
            <Link className="hakkimizda-btn" to="/hakkimizda">Hakkımızda</Link>
        </div>
        <div className="sss">
            <Link className="sss-btn" to="/sss">SSS</Link>
        </div>
        <div className="social-media">
            <Link className="twitter" to="/twitter"><img src={twitter} alt="" /></Link>
            <Link className="instagram" to="/instagram"><img src={instagram} alt="" /></Link>
            <Link className="facebook" to="/facebook"><img src={facebook} alt="" /></Link>
        </div>
        <div className="underline">

        </div>
        <div className="underline2">
            
        </div>
        <div className="gizlilik">
            <Link className="gizlilik-btn" to="/gizlilik">Gizlilik Sözleşmesi</Link>
        </div>
        <div className="kullanim-kosullari">
            <Link className="kullanim-kosullari-btn" to="/kullanim-kosullari">Kullanım Koşulları</Link>
        </div>
    </div>
  )
}

export default Footer