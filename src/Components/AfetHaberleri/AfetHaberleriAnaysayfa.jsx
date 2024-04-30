import './AfetHaberleriAnaysayfa.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import foto from './AfetHaberleriAnaysayfaAssets/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import HaberCard from './HaberCard/HaberCard'
import { useEffect } from 'react'

const AfetHbaerleriAnaysayfa = () => {
  
  const [imageUrl, setImageUrl] = useState('');
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8087/disaster-news/paging?page=${page}`);
        const data = await response.json();
        const firstImageUrl = data.content.length > 0 ? data.content[0].imageUrl : ''; // İlk resmin URL'sini al
        const firstItem = data.content.length > 0 ? data.content[0] : {};
        setImageUrl(firstImageUrl);
        setTitle(firstItem.title);
        setDescription(firstItem.description);
        setLink(firstItem.link); // Linki ayarla
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [page]);

  const handlePrev = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setPage(prevPage => prevPage + 1);
  };
  const handleClick = () => {
    window.open(link, '_blank'); // Yeni sekmede aç
  };
  return (
    <div>
      <Navbar />
        <div className="haberler-anasayfa">
          <div className="buyuk-resim" >
            <div className="resim">
              <img src={imageUrl} alt="" onClick={handleClick} />
              <div className="pagination">
                  {[...Array(10)].map((_, index) => (
                      <span
                          key={index}
                          className={`dot ${index === page ? 'active' : ''}`}
                      ></span>
                  ))}
              </div>
              <div className="left-arrow">
                <FontAwesomeIcon icon={faChevronLeft} size='2x' onClick={handlePrev}/>
              </div>
              <div className="right-arrow">
                <FontAwesomeIcon icon={faChevronRight} size='2x' onClick={handleNext}/>
              </div>
            </div>
            <div className="anasyafa-baslik">
              <h2>{title}</h2>
            </div>
            <div className="anasayfa-icerik">
              <p>{description}</p>
            </div>
            <div className="anasayfa-baslik">
              <h2>Afet Haberleri</h2>
            </div>
          </div>
          <div className="haber-baslik">
            <ul>
              <li className="haber-baslik-li">
                <h3>Tüm Haberler</h3>
              </li>
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
