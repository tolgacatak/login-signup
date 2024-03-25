import './YardimYap.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import gunes from './YardimYapAssests/1.png'
import kutular from './YardimYapAssests/2.png'
import Destek from './DestekKutu/Destek'

const YardimYap = () => {
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
        <Destek />
      </div>
      <Footer />
    </div>
  )
}

export default YardimYap