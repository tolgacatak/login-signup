import './YardimlasmaAnasayfa.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import './YardımCard/YardımAl/YardimAl'
import YardimAl from './YardımCard/YardımAl/YardimAl'
import YardimYap from './YardımCard/YardımYap/YardimYap'
const YardimlasmaAnaSayfa = () => {
  return (
    <div>
        <Navbar />
        <div className="yardimlasma-wrapper">
            <div className="yardimlasma-title">
                <h2>AfetAnkaNET Acıları Azaltıyor</h2>
            </div>
            <div className="yardimlasma-kucuk-yazi">
                <p>
                    <b>AfetAnkaNet Yardımlaşma Platformu, Afetzedelerin acılarını bir nebze de olsa azalatmak için kurulmuştur.</b>
                </p>
            </div>
            <div className="yardimlasma-paragraf">
                <p>
                AfetAnkaNET, doğal afetler gibi acil durumlarda dayanışmayı ve yardımlaşmayı teşvik eden bir platformdur. Kullanıcılarımız, afet anlarında ihtiyaç duydukları yardımı talep edebilir, aynı zamanda diğer kullanıcıların yardım taleplerine yanıt verebilirler. Ayrıca, platformun yönlendirdiği kuruluşlara bağış yaparak ihtiyaç sahiplerine destek olabilirler.
                </p>
            </div>
            <div className="yardimlasma-kartlari">
                <div className="yardim-al">
                    <YardimAl />
                </div>
                <div className="yardim-yap">
                    <YardimYap />
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default YardimlasmaAnaSayfa