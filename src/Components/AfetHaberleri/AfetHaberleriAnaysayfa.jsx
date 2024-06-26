import './AfetHaberleriAnaysayfa.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import foto from './AfetHaberleriAnaysayfaAssets/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import HaberCard from './HaberCard/HaberCard'



const AfetHbaerleriAnaysayfa = () => {
  
  const [imageUrl, setImageUrl] = useState('');
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [newsData, setNewsData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [date, setDate] = useState('');
  const [selectedDisaster, setSelectedDisaster] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        let endpoint = selectedDisaster ? `disaster-news/${selectedDisaster}` : 'disaster-news/paging';
        const response = await fetch(`http://localhost:8087/${endpoint}?page=${page}`);
        const data = await response.json();
        const firstImageUrl = data.content.length > 0 ? data.content[0].imageUrl : ''; // İlk resmin URL'sini al
        const firstItem = data.content.length > 0 ? data.content[0] : {};
        setImageUrl(firstImageUrl);
        setTitle(firstItem.title);
        setDescription(firstItem.description);
        setLink(firstItem.link); 
        setNewsData(data.content); 
        setTotalPages(data.totalPages);
        const pubDate = new Date(firstItem.pubDate);
        const formattedDate = `${pubDate.getDate()}-${pubDate.getMonth() + 1}-${pubDate.getFullYear()}`;
        setDate(formattedDate);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [page, selectedDisaster]);

  const handlePrev = () => {
    setPage(prevPage => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleClick = (url) => {
    window.open(url, '_blank'); // Yeni sekmede aç
  };

  const handleDisasterClick = (disaster) => {
    setSelectedDisaster(disaster);
    setPage(0);
  };

  return (
    <div>
      <Navbar />
      <div className="haberler-anasayfa">
        <div className="buyuk-resim" >
          <div className="resim">
            <img src={imageUrl} alt="" onClick={() => handleClick(link)} />
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
              <h3 onClick={() => handleDisasterClick('')}>Tüm Haberler</h3>
            </li>
            <li>
              <h3 onClick={() => handleDisasterClick('earthquake')}>Depremler</h3>
            </li>
            <li>
              <h3 onClick={() => handleDisasterClick('flood')}>Seller</h3>
            </li>
            <li>
              <h3 onClick={() => handleDisasterClick('fire')}>Yangınlar</h3>
            </li>
            <li>
              <h3 onClick={() => handleDisasterClick('landslide')}>Heyelan</h3>
            </li>
            <li>
              <h3 onClick={() => handleDisasterClick('weather')}>Şiddetli Hava Durumu</h3>
            </li>
            <li>
              <h3 onClick={() => handleDisasterClick('disaster')}>Diğer Afetler</h3>
            </li>
          </ul>
        </div>
        <div className="haberler">
          {/* Haber kartlarını dinamik olarak çağırma */}
          {newsData.slice(0, 6).map((item, index) => (
            <HaberCard
              key={index}
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
              link={item.link}
              pubDate={date}
              onClick={() => handleClick(item.link)}
            />
          ))}
        </div>
        {newsData.length > 6 && (
          <div className="pagination-arrows">
            <FontAwesomeIcon icon={faChevronLeft} size='2x' onClick={handlePrev}/>
            <FontAwesomeIcon icon={faChevronRight} size='2x' onClick={handleNext}/>
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}

export default AfetHbaerleriAnaysayfa
