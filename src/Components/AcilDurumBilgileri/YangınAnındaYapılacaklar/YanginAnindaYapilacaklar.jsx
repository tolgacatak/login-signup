import './YanginAnindaYapilacaklar.css'
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa'
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer'
import yangin1 from './YanginAssets/1.jpg'
import yangin2 from './YanginAssets/2.jpg'
import yangin3 from './YanginAssets/3.jpg'

const YanginAnindaYapilacaklar = () => {
  return (
    <div>
      <Navbar />
      <div className="yangin-ani-wrapper">
        <div className="yangin-ani-title">
          <h3>Yangın Anında Neler Yapılmalıdır ?</h3>
        </div>
        <div className="yangin-ani-icerik">
          <div className="yangin1">
            <p>
            Yangın Alarmını Çalın: Yangın alarmı duyulduğunda hemen binayı terk etmeye başlayın. Yangın alarmı yoksa, diğer insanları uyarmak için sesli olarak yangın olduğunu duyurun.
            <br />
            <br />
            Güvenli Bir Yer Belirleyin: Eğer yangın küçükse ve hızla yayılmıyorsa, güvenli bir yere gidin. Bu yer yangından uzak, duman almayan bir yer olmalıdır.
            </p>
          </div>
          <div className="yangin-img1">
            <img src={yangin1} alt="yangin1"/>
          </div>
          <div className="yangin2">
            <p>
              Hemen İtfaiyeyi Arayın: Yangın büyüyorsa veya kontrol altına alınamıyorsa hemen itfaiyeyi arayın. Türkiye'de 110 numarasını arayarak itfaiyeyi çağırabilirsiniz.
              <br />
              <br />
              Kapıları ve Pencereleri Kontrol Edin: Eğer kapı veya pencere açarsanız, dumanın içeri girmesine neden olabilirsiniz. Eğer kapı açarsanız, önce kapının sıcak olduğundan emin olun ve eğer sıcaksa açmayın.
            </p>
          </div>
          <div className="yangin-img2">
            <img src={yangin2} alt="yangin2"/>
          </div>
          <div className="yangin3">
            <p>
              Yanmaz Giysiler Giyin: Pamuklu ve yanmaz giysiler giymeye çalışın. Sentetik giysiler yangında hızla alev alabilir.
              <br />
              <br />
              Dumanın Altına Gitmeyin: Dumanın yükseldiği yerlerde nefes almak daha kolaydır. Eğer duman altındaysanız, mümkünse yere eğilerek ve yere yakın bir şekilde hareket edin.
            </p>
          </div>
          <div className="yangin-img3">
            <img src={yangin3} alt="yangin3"/>
          </div>
          <div className="yangin4">
              <p>
              Yangın Söndürme Ekipmanlarını Kullanın: Eğer eğitimliyseniz ve yangın söndürme ekipmanlarını kullanma konusunda bilgi sahibiyseniz, yangını söndürmek için bu ekipmanları kullanabilirsiniz. Ancak, kendinizi tehlikeye atmayın.
              <br />
              <br />
              Acil Çıkışları Kullanın: Acil çıkış işaretlerini takip ederek binayı terk edin. Asansörleri kullanmayın, merdivenleri kullanarak aşağı inin.
              <br />
              <br />
              Dışarıda Toplanın: Binayı terk ettikten sonra belirlenmiş güvenli bir toplanma noktasında diğerlerini bekleyin. Böylece itfaiye ekiplerinin sizinle iletişim kurması kolaylaşır.
              </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default YanginAnindaYapilacaklar