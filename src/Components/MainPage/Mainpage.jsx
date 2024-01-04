import NavbarAnasayfa from "../Navbar/NavbarAnasayfa"
import Footer from "../Footer/Footer"
import Profil from "./Profil/Profil"
import depremHaberi from '../Assets/DepremHaberi.png'
import './Mainpage.css'
import search from '../Assets/search.png'
import Sosyalmedya from "./Sosyalmedya/Sosyalmedya"


const Mainpage = () => {
  return (
    <div>
        <NavbarAnasayfa/>
        <Profil />
        <div className="deprem-haberi">
            <img src={depremHaberi} alt="" />
            <span>Az önce deprem mi oldu? Nerede, kaç şiddetinde deprem oldu?</span>
        </div>
        <div className="arama-anasayfa">
            <span>Afet Adı veya Anahtar Kelime Giriniz(ör: 'Deprem','Sel' vb.)</span>
            <div className="arama">
                <input type="text" placeholder="Aramak İçin Tıklayın..." />
                <img src={search} alt="" />
            </div>
        </div>
        <div className="sosyal-medya-haberler">
            <Sosyalmedya />
            <Sosyalmedya />
        </div>
        


        <Footer 
        />
    </div>
  )
}

export default Mainpage