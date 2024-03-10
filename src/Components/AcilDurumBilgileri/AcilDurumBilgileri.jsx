import './AcilDurumBilgileri.css'
import NavbarAnasayfa from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import acillogo from './AcilDurumAssets/2.png'
import numaralar from './AcilDurumAssets/1.png'
import deprem from './AcilDurumAssets/3.jpg'
import sel from './AcilDurumAssets/4.jpg'
import cig from './AcilDurumAssets/5.jpg'
import yangin from './AcilDurumAssets/6.jpg'
import { Link } from 'react-router-dom'

const AcilDurumBilgileri = () => {
  return (
    <div>
        <NavbarAnasayfa />
        <div className="acil-durumyapilacaklar">
            <div className="acil-durum-yapilacaklar">
                <p>Acil Durum Anında Yapılacaklar</p>
            </div>
            <div className="deprem-aninda-yapilacaklar">
                <Link to="/deprem-ani">
                    <img src={deprem} alt="" />
                    <p>Deprem Anında Yapılacaklar</p>
                </Link>  
            </div>
            <div className="sel-aninda-yapilacaklar">
                <Link to="/sel-ani">
                    <img src={sel} alt="" />
                    <p>Sel Anında Yapılacaklar</p>
                </Link>
            </div>
            <div className="cig-aninda-yapilacaklar">
                <Link to="/cig-ani">
                    <img src={cig} alt="" />
                    <p>Çığ Anında Yapılacaklar</p>
                </Link>
            </div>
            <div className="yangin-aninda-yapilacaklar">
                <Link to="/yangin-ani">
                    <img src={yangin} alt="" />
                    <p>Yangın Anında Yapılacaklar</p>
                </Link>
            </div>
        </div>
        <div className="acil-durum-wrapper">
            <div className="acil-durum-yazi">
                <p>
                Ülkemizde farklı acil yardım çağrıları için kullanılan 7 kuruma ait acil çağrı numaraları (İtfaiye: 110, İlkyardım: 112, AFAD: 122, Polis: 155, Jandarma: 156, Orman: 177, Sahil Güvenlik: 158) tek numara (112) altında toplanmıştır.
                </p>
            </div>
            <div className="acil-durum-112">
                <img src={acillogo} alt="" />
            </div>
            <div className="acil-durum-numaralar">
                <img src={numaralar} alt="" />
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default AcilDurumBilgileri