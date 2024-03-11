import './CigAnindaYapilacaklar.css'
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa'
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer'
import cig1 from './ÇığAssets/1.png'
import cig2 from './ÇığAssets/2.jpg'

const CigAnindaYapilacaklar = () => {
  return (
    <div>
      <Navbar />
      <div className="cig-ani-wrapper">
        <div className="cig-ani-title">
          <h3>Çığ Anında Neler Yapılmalıdır ?</h3>
        </div>
        <div className="cig-ani-icerik">
          <div className="cig1">
            <p>
            Çığ Yüzeyinde Kalın: Eğer çığ altında iseniz, çığ yüzeyinde kalmaya çalışın. Elinizle bir havuz açmaya çalışın veya ağzınıza ve burnunuza bir hava boşluğu açın.
            <br />
            <br />
            Ses Çıkarın: Eğer çığ altında iseniz, ses çıkararak yardım çağrısı yapın. Elinizle vurarak veya bağırarak ses çıkarabilirsiniz. 
            </p>
          </div>
          <div className="cig1-img">
            <img src={cig1} alt="cig1"/>
          </div>
          <div className="cig2">
            <p>
              Kurtarma Ekipmanlarını Kullanın: Eğer ekipmanınız varsa, lavin transceiver'ı (sinyal verici), lavin sondası ve lavin tünelini kullanarak kendinizi veya başkalarını kurtarmaya çalışın.
              <br />
              <br />
              Güvenli Bölgeye Yönelin: Çığ tehlikesi geçtikten sonra, güvenli bir bölgeye yönelin ve kurtarma ekiplerinin gelmesini bekleyin.
            </p>
          </div>
          <div className="cig2-img">
            <img src={cig2} alt="cig2"/>
          </div>
          <div className="cig-sonrasi-title">
            <h3>Çığ Sonrası Yapılacaklar</h3>
          </div>
          <div className="cig3">
            <p>
            •Çığ tehlikesi geçtikten sonra, bölgedeki diğer tehlikelere karşı dikkatli olun. Çığlar genellikle diğer çığlar ve kar sarkıntıları gibi tehlikelere neden olabilir.
            <br />
            <br />
            •Çığ tehlikesi olan bölgeden uzaklaşın ve güvenli bir bölgeye gitmek için en güvenli rotayı kullanın.
            <br />
            <br />
            •Çığ tehlikesinin olduğu bir bölgedeyseniz, başkalarına çığ tehlikesi hakkında bilgi verin ve onları uyarmaya çalışın.
            </p>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default CigAnindaYapilacaklar