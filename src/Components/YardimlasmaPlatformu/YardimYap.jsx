import './YardimYap.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import gunes from './YardimYapAssests/1.png'
import kutular from './YardimYapAssests/2.png'
import Destek from './DestekKutu/Destek'
import afad from './YardimYapAssests/3.jpg'
import darüssafaka from './YardimYapAssests/4.png'
import ihh from './YardimYapAssests/5.png'
import ahbap from './YardimYapAssests/6.png'
import kizilay from './YardimYapAssests/7.png'
import tegv from './YardimYapAssests/8.jpg'
import axios from 'axios'
import { useEffect, useState } from 'react'

const YardimYap = () => {
  const [helpBox, setHelpBox] = useState([]);
  const [helpBoxId, setHelpBoxId] = useState(0);
  const [count, setCount] = useState(0); // Tüm yardım kutularının sayacını tutmak için

  useEffect(() => {
    axios.get(`http://localhost:8087/helpbox/getAllHelpBoxes`)
        .then((response) => {
             
            const helpBoxData = response.data; // Sadece ilk talebi alıyoruz, diğerleri için gerekirse uygun bir şekilde döngü kullanabilirsiniz
            setHelpBox(helpBoxData);
            setCount(response.data.length);
        })
        .catch((error) => {
            console.error("Hata:", error);
        });
}, []);
  return (
    <div>
      <Navbar />
      <div className="yardim-yap-wrapper">
        <div className="nasil-yardim-edebilirim">
            <div className="yardim-gunes">
              <img src={gunes} alt="" />
            </div>
            
            <div className="nasil-yardim-content">
              <div className="nasil-yardim-title">
                <h2><b>Nasıl Yardım Edebilirim ?</b></h2>
              </div>
              <h4>Yardım etmek isteyenler için buradayız! </h4>
              <div className="nasil1">
              Sitemizdeki yardım kutuları, çeşitli ihtiyaçları olan bireyler tarafından oluşturulmuş durumda. Her kutu, belirli bir yardım talebini ve bu talebin detaylarını içeriyor. İşte yardım etme süreciniz:
              <br />
              <br />
              <b>Yardım Kutularını İnceleyin:</b> Sitemizde yer alan kutuları inceleyerek, hangi yardım taleplerinin sizin ilgi alanınıza ve imkanlarınıza uygun olduğunu görebilirsiniz. Her kutuda yardımın türü, talebin özeti ve ihtiyaç duyulan bölge gibi bilgiler bulunmaktadır.
              <br />
              <br />
              <b>İletişime Geçin:</b> Yardım etmek istediğiniz kutuyu bulduğunuzda, 'İletişime Geç' butonuna tıklayarak yardım talebini oluşturan kişiyle iletişim kurabilirsiniz. Bu sayede, yardımınızın nasıl yapılacağı konusunda doğrudan bilgi alabilirsiniz.
              <br />
              <br />
              <b>Güvenilirlik Oylaması:</b> Her yardım kutusunun altında yer alan güvenilirlik oylamasına (5 yıldızlı sistem) katılarak, kutuyu açan kişinin güvenilirliğine dair kendi görüşünüzü belirtebilirsiniz. Böylece, diğer kullanıcılara da yardım kutuları hakkında fikir verebilirsiniz.
              <br />
              <br />
              <b>Yardımınızı Yapın:</b> İletişim kurduğunuz kişiyle detayları görüştükten sonra, yardımınızı belirlenen adrese gönderebilir veya belirtilen şekilde yerine getirebilirsiniz.
              <br /><br />
              Bu platformda biz sadece aracıyız; yardımın doğrudan ilgili kişilere ulaşmasını sağlıyoruz. Sizin katkınızla, ihtiyacı olanlara ulaşan yardım eli olabilirsiniz. Her bir yardım kutusunda, bir hayatı iyileştirme potansiyeli var!
              </div>
            </div>
            <div className="yardim-kutular">
              <img src={kutular} alt="" />
            </div>
        </div>
        <div className="destek-kutu-css">
          {helpBox.length > 0 && helpBox.map((box) => (
            <Destek key={box.id} helpBox={box} count={count}/>
          ))}
        </div>

        <div className="destek-paging">
          <a href="" className='paging1'>1</a>
          <a href="" className='ucnokta'>...</a>
          <a href="" className='paging-all'>Görüntüle</a>
        </div>
        <div className="destek-para-yardim">
            <div className="destek-para-yardim-title">
              <h3>Maddi Bağış Yapabileceğiniz Kurumlar</h3>
            </div>
            <div className="kurumlar">
              <div className="afad">
                <div className="afad-gorsel">
                  <img src={afad} alt ="" />
                </div>
                <a href="https://www.cnnturk.com/turkiye/afada-yardim-nasil-yapilir-kizilay-afad-deprem-bagisi-hesaplari-iban-hesap-bilgileri-sms-numaralari#:~:text=AFAD%20ba%C4%9F%C4%B1%C5%9F%C4%B1n%20nas%C4%B1l%20yap%C4%B1laca%C4%9F%C4%B1n%C4%B1%3B%20%22Kampanyaya,hesap%20numaralar%C4%B1%20%C3%BCzerinden%20ba%C4%9F%C4%B1%C5%9F%20yapabilecektir.">AFAD</a>
              </div>
              <div className="darussafa">
                <div className="darussafa-gorsel">
                  <img src={darüssafaka} alt="" />
                </div>
                <a href="https://www.darussafaka.org/bagis">Darüşşafaka</a>
              </div>
              <div className="ihh">
                <div className="ihh-gorsel">
                  <img src={ihh} alt="" />
                </div>
                <a href="https://www.ihh.org.tr/bagis">İHH</a>
              </div>
              <div className="ahbap">
                <div className="ahbap-gorsel">
                  <img src={ahbap} alt="" />
                </div>
                <a href="https://ahbap.org/bagisci-ol">Ahbap</a>
              </div>
              <div className="kizilay">
                <div className="kizilay-gorsel">
                  <img src={kizilay} alt="" />
                </div>
                <a href="https://www.kizilay.org.tr/bagis">Kızılay</a>
              </div>
              <div className="tegv">
                <div className="tegv-gorsel">
                  <img src={tegv} alt="" />
                </div>
                <a href="https://www.tegv.org/bagis">TEGV</a>
              </div>
            </div> 
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default YardimYap