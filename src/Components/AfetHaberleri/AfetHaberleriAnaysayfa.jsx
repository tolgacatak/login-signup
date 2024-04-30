import './AfetHaberleriAnaysayfa.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import foto from './AfetHaberleriAnaysayfaAssets/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import HaberCard from './HaberCard/HaberCard'

const AfetHbaerleriAnaysayfa = () => {
  const images = [foto];
  
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div>
      <Navbar />
        <div className="haberler-anasayfa">
          <div className="buyuk-resim">
            <div className="resim">
              <img src={images[activeIndex]} alt="" />
              <div className="pagination">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <div className="left-arrow">
                <FontAwesomeIcon icon={faChevronLeft} size='2x'/>
              </div>
              <div className="right-arrow">
                <FontAwesomeIcon icon={faChevronRight} size='2x' />
              </div>
            </div>
            <div className="anasyafa-baslik">
              <h2>Başlık</h2>
            </div>
            <div className="anasayfa-icerik">
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam eveniet suscipit sunt ducimus, quis ipsam rem ab quos voluptate tempore veniam voluptas aspernatur sapiente consequatur. Consequuntur fuga iusto unde magni totam similique minus reprehenderit maiores? Odit tenetur atque facilis molestias!</p>
            </div>
            <div className="anasayfa-baslik">
              <h2>Afet Haberleri</h2>
            </div>
          </div>
          <div className="haber-baslik">
            <ul>
              <li>
                <h3>Depremler</h3>
              </li>
              <li>
                <h3>Seller</h3>
              </li>
              <li>
                <h3>Yangınlar</h3>
              </li>
              <li>
                <h3>Heyelan</h3>
              </li>
              <li>
                <h3>Şiddetli Hava Durumu</h3>
              </li>
              <li>
                <h3>Diğer Afetler</h3>
              </li>
            </ul>
          </div>
          <div className="haberler">
            <HaberCard />
            <HaberCard />
            <HaberCard />
            <HaberCard />
            <HaberCard />
            <HaberCard />
          </div>

        </div>
      <Footer />
    </div>
  )
}

export default AfetHbaerleriAnaysayfa
