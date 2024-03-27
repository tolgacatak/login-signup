import NavbarAnasayfa from "../Navbar/NavbarAnasayfa"
import Footer from "../Footer/Footer"
import Profil from "./Profil/Profil"
import depremHaberi from '../Assets/DepremHaberi.png'
import './Mainpage.css'
import search from '../Assets/search.png'
import Sosyalmedya from "./Sosyalmedya/Sosyalmedya"
import TalepCard from "./TalepCard/TalepCard"
import axios from 'axios'
import { useEffect, useState } from 'react'
import LoginModal from '../Modals/Loginmodal'


const Mainpage = () => {
    const [authorized, setAuthorized] = useState(false);
    const id = localStorage.getItem('userId');
    const[error, setError] = useState(false);
    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const response = await axios.get(`http://localhost:8087/users/checkNameSurname/${id}`);
                if (response.status === 200) {
                    console.log("deneme");
                    setAuthorized(true);
                }
                else {
                    setAuthorized(false);
                }
            } catch (error) {
                console.error('Authorization check failed:', error);
            }
        };
        if (id) {
            checkAuthorization();
        }
    }, [id]);
    const yardimalHandler = () => {
        
        setError(
            {
                title: "Hata!",
                message: 'Taleplerinizi görüntüleyebilmek için isim ve soyisim bilgilerinizi eklemelisiniz!'
            }
        )
    
}
const errorHandler = () => {
    setError('');
}

  return (
    <div>
        <NavbarAnasayfa/>
        {error && <LoginModal onConfirm={errorHandler} error={error} />}
        <Profil />
        <div className="deprem-haberi">
            <img src={depremHaberi} alt="" />
            <span>Az önce deprem mi oldu? Nerede, kaç şiddetinde deprem oldu?</span>
        </div>
        <div className="talep-card-mainpage" onClick={authorized ? null : yardimalHandler}>
            <TalepCard authorized={authorized} />
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