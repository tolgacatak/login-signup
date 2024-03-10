import './DepremAniYapilacak.css'
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa'
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer'
import ucgen from './DepremAssets/1.jpg'
import cok from './DepremAssets/2.jpg'
import tsnumai from './DepremAssets/3.jpg'
import araba from './DepremAssets/4.jpg'
import metro from './DepremAssets/5.jpg'

const DepremAniYapilacak = () => {
  return (
    <div>
      <Navbar />
      <div className="deprem-ani-wrapper">
          <div className="deprem-ani-title">
            <h3>Deprem Anında Neler Yapılmalıdır ?</h3>  
          </div>
          <div className="deprem-ani-icerik">
              <div className='p1'>
                <p>
                DEPREM ANINDA BİNA İÇERİSİNDEYSENİZ; Kesinlikle panik yapılmamalıdır. Sabitlenmemiş
                dolap, raf, pencere vb. eşyalardan uzak durulmalıdır.
                <br />
                <br />
                Varsa sağlam sandalyelerle desteklenmiş masa altına veya dolgun ve hacimli koltuk, kanepe, içi dolu
                sandık gibi koruma sağlayabilecek eşya yanına çömelerek hayat üçgeni oluşturulmalıdır. Baş iki el
                arasına alınarak veya bir koruyucu (yastık, kitap vb) malzeme ile korunmalıdır. Sarsıntı geçene kadar
                bu pozisyonda beklenmelidir.
                <br />
                <br />
                Güvenli bir yer bulup, diz üstü ÇÖK Başını ve enseni koruyacak şekilde KAPAN Düşmemek için
                sabit bir yere TUTUN
                </p>
              </div>
              <div className="sekil-1">
                <img src={ucgen} alt="ucgen"/>
              </div>
              <div className="p2">
                <p className='p2'>
                Merdivenlere ya da çıkışlara doğru koşulmamalıdır. Balkona çıkılmamalıdır. Balkonlardan ya da
                pencerelerden aşağıya atlanmamalıdır. Kesinlikle asansör kullanılmamalıdır. Telefonlar acil durum ve
                yangınları bildirmek dışında kullanılmamalıdır. Kibrit, çakmak yakılmamalı, elektrik düğmelerine
                dokunulmamalıdır.
                <br />
                <br />
                Tekerlekli sandalyede isek tekerlekler kilitlenerek baş ve boyun korumaya alınmalıdır. Mutfak,
                imalathane, laboratuar gibi iş aletlerinin bulunduğu yerlerde; ocak, fırın ve bu gibi cihazlar
                kapatılmalı, dökülebilecek malzeme ve maddelerden uzaklaşılmalıdır. Sarsıntı geçtikten sonra elektrik,
                gaz ve su vanalarını kapatılmalı, soba ve ısıtıcılar söndürülmelidir.
                <br />
                <br />
                Diğer güvenlik önlemleri alınarak gerekli olan eşya ve malzemeler alınarak bina daha önce tespit
                edilen yoldan derhal terk edilip toplanma bölgesine gidilmelidir. Okulda sınıfta ya da büroda ise
                sağlam sıra, masa altlarında ve ya yanında; koridorsa ise duvarın yanına hayat üçgeni oluşturacak
                şekilde ÇÖK-KAPAN-TUTUN hareketi ile baş ve boyun korunmalıdır. Pencerelerden ve camdan
                yapılmış eşyalardan uzak durulmalıdır.
                </p>
              </div>
              <div className="sekil-2">
                <img src={cok} alt=""/>
              </div>
              <div className="p3">
                <p>
                  DEPREM ANINDA AÇIK ALANDAYSANIZ; Enerji hatları ve direklerinden, ağaçlardan, diğer
                  binalardan ve duvar diplerinden uzaklaşılmalıdır. Açık arazide çömelerek etraftan gelen tehlikelere
                  karşı hazırlıklı olunmalıdır. Toprak kayması olabilecek, taş veya kaya düşebilecek yamaç altlarında
                  bulunulmamalıdır. Böyle bir ortamda bulunuluyorsa seri şekilde güvenli bir ortama geçilmelidir.
                  Binalardan düşebilecek baca, cam kırıkları ve sıvalara karşı tedbirli olunmalıdır. Toprak altındaki
                  kanalizasyon, elektrik ve gaz hatlarından gelecek tehlikelere karşı dikkatli olunmalıdır. Deniz
                  kıyısından uzaklaşılmalıdır. Tsunami tehlikesi varsa yüksek yerlere çıkılmalıdır.
                </p>
              </div>
              <div className="sekil-3">
                <img src={tsnumai} alt=""/>
              </div>
              <div className="p4">
                <p>
                  DEPREM ANINDA ARAÇ KULLANIYORSANIZ; Sarsıntı sırasında karayolunda seyir
                  halindeyseniz; Bulunduğunuz yer güvenli ise; yolu kapatmadan sağa yanaşıp durulmalıdır. Kontak
                  anahtarı yerinde bırakılıp, pencereler kapalı olarak araç içerisinde beklenmelidir. Sarsıntı durduktan
                  sonra açık alanlara gidilmelidir. Araç meskun mahallerde ya da güvenli bir yerde değilse (ağaç ya da
                  enerji hatları veya direklerinin yanında, köprü üstünde vb.); durdurulmalı, kontak anahtarı üzerinde
                  bırakılarak terk edilmeli ve trafikten uzak açık alanlara gidilmelidir.
                  Sarsıntı sırasında bir tünelin içinde iseniz ve çıkışa yakın değilseniz; araç durdurulup aşağıya inilmeli
                  ve yanına yan yatarak ayaklar karına çekilip, ellerle baş ve boyun korunmalıdır. (ÇÖK-KAPANTUTUN)
                  Kapalı bir otoparkta iseniz; araç dışına çıkılıp, yanına yan yatarak, ellerle baş ve boyun korunmalıdır.
                  Yukarıdan düşebilecek tavan, tünel gibi büyük kitleler aracı belki ezecek ama yok etmeyecektir. Araç
                  içinde olduğunuz takdirde, üzerine düşen bir parça ile aracın içinde ezilebilirsiniz.
                </p>
              </div>
              <div className="sekil-4">
                <img src={araba} alt=""/>
              </div>
              <div className="p5">
                <p>
                  METRODA VEYA DİĞER TOPLU TAŞIMA ARAÇLARINDAYSANIZ:
                  Gerekmedikçe, kesinlikle metro ve trenden inilmemelidir. Elektriğe kapılabilinir veya diğer hattan
                  gelen başka bir metro ya da tren size çarpabilir. Sarsıntı bitinceye kadar metro ya da trenin içinde,
                  sıkıca tutturulmuş askı, korkuluk veya herhangi bir yere tutunmalı, metro veya tren personeli
                  tarafından verilen talimatlara uyulmalıdır.
                </p>
              </div>
              <div className="sekil-5">
                <img src={metro} alt=""/>
              </div>
          </div>  
      </div>
      <Footer />
    </div>
  )
}

export default DepremAniYapilacak