import './SelAnindaYapilacaklar.css'
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa'
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer'
import gorsel1 from './SelAssets/1.jpg'
import gorsel2 from './SelAssets/2.jpg'
import gorsel3 from './SelAssets/3.png'

const SelAnindaYapilacaklar = () => {
  return (
    <div>
        <Navbar />
        <div className="sel-ani-wrapper">
            <div className="sel-ani-title">
              <h3>Sel Anında Neler Yapılmalıdır ?</h3>  
            </div>
            <div className="sel-ani-icerik">
              <div className="sel1">
                <p>
                  Güvenli Bir Yere Çıkın: Sel suları çok hızlı yükselebilir. Mümkünse yüksek katlara veya sel sularının ulaşamayacağı yüksek yerlere çıkın.
                  <br />
                  <br />
                  Elektrik, Gaz ve Su Şalterlerini Kapatın: Sel suları elektrik çarpmalarına ve yangınlara neden olabilir. Güvenliğiniz için bu şalterleri kapatın.
                </p>
              </div>
              <div className="sel-sekil-1">
                <img src={gorsel1} alt="gorsel1"/>
              </div>
              <div className="sel2">
                <p>
                Haberleşmeyi Sürdürün: Taşınabilir radyo veya akıllı telefonlar aracılığıyla resmi haber kaynaklarını takip edin ve güncel bilgileri alın.
                <br />
                <br />
                Tahliye Edilme Talimatlarına Uyun: Eğer tahliye edilmeniz gerekiyorsa, yerel yetkililerin talimatlarına uyun ve tahliye yollarını kullanın.
                </p>
              </div>
              <div className="sel-sekil-2">
                <img src={gorsel2} alt="gorsel2"/>
              </div>
              <div className="sel3">
                <p>
                  Kendi Güvenliğinizi Önceliklendirin: Suyla dolu bölgelerde yürümekten veya araç kullanmaktan kaçının. Hızlı akan sular, insanları ve araçları kolayca sürükleyebilir.
                </p>
              </div>
              <div className="sel-sonrasi-title">
                <h3>Sel Sonrası Neler Yapılmalıdır ?</h3>
              </div>
              <div className="sel4">
                <p>
                  •Sel sonrası evinize dönmeden önce, yetkililerin güvenli olduğunu ilan etmesini bekleyin.
                  <br />
                  <br />
                  •Elektrik sistemi, gaz hatları ve su sistemi gibi altyapılar için hasar kontrolü yapın.
                  <br />
                  <br />
                  •İçme suyunun güvenli olduğundan emin olana kadar şişelenmiş su kullanın.
                  <br />
                  <br />
                  •Hasar görmüş eşyaları ve potansiyel tehlikeleri temizlerken dikkatli olun.
                </p>
              </div>
              <div className="sel-sekil-3">
                <img src={gorsel3} alt="gorsel3"/>
              </div>
            </div>
            
        </div>
        <Footer />
    </div>
  )
}

export default SelAnindaYapilacaklar