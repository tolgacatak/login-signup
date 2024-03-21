
import './DestekTalepEt.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import foto1 from './DestekAssets/1.png'

const DestekTalepEt = () => {
  return (
    <div>
        <Navbar />
        <div className="destek-iste-wrapper">
            <img src={foto1} alt="" />
            <div className="destek-iste-container">
                <div className="destek-iste-title">
                    <h2>Yardım Kutusu</h2>
                </div>
            </div>
        </div>
        <Footer />

    </div>
  )
}

export default DestekTalepEt