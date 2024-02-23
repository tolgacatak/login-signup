import React from 'react'
import NavbarGiris from '../../Navbar/NavbarGiris'
import Footer from '../Footer'
import './sss.css'

const sss = () => {
  return (
    <div className='sss-container'>
      <NavbarGiris/> 
        <div className="sss-wrapper">
          <div className="sss-title">
            <h1>Sıkça Sorulan Sorular</h1>
          </div>
          <div className="sss-content">
            <div className="sss1">
              <h3>
              •AfetAnkaNET nedir ve ne amaçla kullanılır?
              </h3>
              <p>
              AfetAnkaNET, doğal afetler sırasında toplumu hızlı ve doğru bir şekilde bilgilendirmek için tasarlanmış bir afet yönetim ve bilgilendirme sistemi web platformudur. Sosyal medya üzerinden yapılan paylaşımları toplayarak, afetin büyüklüğü, etkilediği bölgeler ve ihtiyaç duyulan yardımlar hakkında yakın zamanlı bilgiler sunar. Hem bireylerin hem de yardım organizasyonlarının kolayca erişebileceği gerekli bilgileri sunar.
              </p>
            </div>
            <div className="sss2">
              <h3>
              •AfetAnkaNET'in ana amacı nedir?
              </h3>
              <p>
              AfetAnkaNET'in ana amacı, afet durumlarında etkilenen bireyler ve yardım organizasyonları için yakın zamanlı ve etkili bilgilendirme sağlamaktır. Bu platform, afetle ilgili sosyal medya paylaşımlarını analiz ederek güncel ve doğru bilgiler sunar, afet bölgelerini harita üzerinde gösterir ve yardım organizasyonları için etkili bir koordinasyon arayüzü sağlar.
              </p>
            </div>
            <div className="sss3">
              <h3>
                •Hangi amaçlarla kullanıcı bilgileri toplanıyor?
              </h3>
              <p>
              AfetAnkaNET, kullanıcıların afet durumlarında güvenliğini sağlamak, bilgilendirmek ve yardım etmek amacıyla kullanıcı bilgilerini toplar. Bu bilgiler, afet durumlarında etkilenen bölgeleri belirlemek, yardım ihtiyacı olanları tespit etmek ve yardım organizasyonlarını koordine etmek için kullanılır.
              </p>
            </div>
          </div>
        </div>
      <Footer/> 
    </div>
  )
}

export default sss