import './YardimlasmaAnasayfa.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import './YardımCard/YardımAl/YardimAl'
import YardimAl from './YardımCard/YardımAl/YardimAl'
import YardimYap from './YardımCard/YardımYap/YardimYap'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Loginmodal from '../Modals/Loginmodal'
const YardimlasmaAnaSayfa = () => {
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
                    message: 'Talep oluşturabilmek için isim ve soyisim bilgilerinizi eklemelisiniz.'
                }
            )
        
    }
    
    const errorHandler = () => {
        setError('');
    }
    
  return (
    <div>
        <Navbar />
        {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="yardimlasma-wrapper">
            <div className="yardimlasma-title">
                <h2>AfetAnkaNET Acıları Azaltıyor</h2>
            </div>
            <div className="yardimlasma-kucuk-yazi">
                <p>
                    <b>AfetAnkaNet Yardımlaşma Platformu, Afetzedelerin acılarını bir nebze de olsa azaltmak için kurulmuştur.</b>
                </p>
            </div>
            <div className="yardimlasma-paragraf">
                <p>
                AfetAnkaNET, doğal afetler gibi acil durumlarda dayanışmayı ve yardımlaşmayı teşvik eden bir platform olacaktır. Kullanıcılarımız, afet anlarında ihtiyaç duyacakları yardımı talep edebilecek, aynı zamanda diğer kullanıcıların yardım taleplerine yanıt verebilecekler. Ayrıca, platformun yönlendireceği kuruluşlara bağış yaparak ihtiyaç sahiplerine destek olabilecekler.                </p>
            </div>
            <div className="yardimlasma-kartlari">
                    <div className="yardim-al" onClick={authorized ? null : yardimalHandler}>
                        <YardimAl authorized={authorized} />
                    </div>
                    <div className="yardim-yap" onClick={authorized ? null : yardimalHandler}>
                        <YardimYap authorized={authorized} />
                    </div>
                </div>
             <div className="yardimlasma-uyari">
                <p>
                    <b>Yardım talebi oluşturmak ve yardım yapmak için İsim - Soyisim bilgisinin eklenmiş olması gerekmektedir !
                        Eklemek için <a href="/profil-page  ">tıklayınız.</a>
                    </b>
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default YardimlasmaAnaSayfa