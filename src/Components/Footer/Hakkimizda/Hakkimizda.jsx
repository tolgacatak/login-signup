import React from 'react'
import './Hakkimizda.css'
import NavbarGiris from '../../Navbar/NavbarGiris'
import Footer from '../Footer'
import NavbarAnasayfa from '../../Navbar/NavbarAnasayfa'

const Hakkimizda = () => {
  const userId = localStorage.getItem('userId');
  return (
    <div className='hakkimizda-container'>
      {userId ? <NavbarAnasayfa /> : <NavbarGiris />}
        <div className="hakkimizda-wrapper">
          <div className="hakkimizda-title">
            <h1>Hakkımızda</h1>
          </div>
          <div className="hakkimizda-content">
            <p>
            AfetAnkaNET, doğal afetler sırasında toplumu hızlı ve doğru bir şekilde bilgilendirmek için tasarlanmış bir afet yönetim ve bilgilendirme sistemi web platformudur. Sosyal medya üzerinden yapılan paylaşımları toplayarak, afetin büyüklüğü, etkilediği bölgeler ve ihtiyaç duyulan yardımlar hakkında yakın zamanlı bilgiler sunar. Hem bireylerin hem de yardım organizasyonlarının kolayca erişebileceği gerekli bilgileri sunar.
            </p>
          </div>
        </div>
      <Footer/> 
    </div>
    
  )
}

export default Hakkimizda