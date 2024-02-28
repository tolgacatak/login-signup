import React from 'react'
import NavbarGiris from '../../Navbar/NavbarGiris'
import Footer from '../Footer'
import NavbarAnasayfa from '../../Navbar/NavbarAnasayfa'
import './Kullanım.css'

const Kullanım = () => {
  const userId = localStorage.getItem('userId');
  return (
    <>
    {userId ? <NavbarAnasayfa /> : <NavbarGiris />}
        <div className="kullanım-container">
            <div className="kullanım-title">
                <h1>Kullanım Koşulları</h1>
            </div>
            <div className="kullanım-content">
               <div className="kullanim1">
                  <h3>
                    •Mülkiyet Hakları
                  </h3>
                  <p>
                    Bu web sitesinde bulunan tüm materyaller (metinler, grafikler, logolar, ses dosyaları, video dosyaları vb.) tarafımıza veya lisans verenlerimize aittir ve telif haklarına tabidir. Bu materyalleri izinsiz kullanmak yasaktır.
                  </p>
               </div>
               <div className="kullanim2">
                  <h3>
                    •Kullanıcıların Sorumlulukları
                  </h3>
                  <p>
                  Bu web sitesini kullanırken yasalara uymakla yükümlüsünüz. Siteyi kullanarak başkalarının haklarını ihlal etmeyi veya zarar verici faaliyetlerde bulunmayı kabul etmiyorsunuz.
                  </p>
               </div>
               <div className="kullanim3">
                  <h3>
                    •Gizlilik Politikası
                  </h3>
                  <p>
                    Bu web sitesini kullanarak, gizlilik politikamızı kabul etmiş olursunuz. Gizlilik politikamız hakkında daha fazla bilgi için lütfen gizlilik politikamızı inceleyin                  </p>
               </div>
               <div className="kullanim4">
                  <h3>
                    •Hizmet Değişiklikleri
                  </h3>
                  <p>
                  Bu web sitesi üzerindeki hizmetleri ve içerikleri önceden bildirim yapmaksızın değiştirme veya kaldırma hakkını saklı tutarız.                  </p>
               </div>
               <div className="kullanim5">
                    <h3>
                      •Bağlantılar
                    </h3>
                    <p>
                    Bu web sitesi diğer web sitelerine bağlantılar içerebilir. Bu bağlantılar yalnızca kolaylık sağlamak içindir ve bağlantı verilen web sitesinin içeriğinden sorumlu değiliz. </p>
              </div>
            </div>
        </div>
    <Footer/> 
 </>
  )
}

export default Kullanım