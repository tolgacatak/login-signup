import NavbarAnasayfa from "../Navbar/NavbarAnasayfa"
import Footer from "../Footer/Footer"
import Profil from "./Profil/Profil"
import depremHaberi from '../Assets/DepremHaberi.png'
import './Mainpage.css'
import search from '../Assets/search.png'
import Sosyalmedya from "./Sosyalmedya/Sosyalmedya"
import TalepCard from "./TalepCard/TalepCard"
import axios from 'axios'
import { useEffect, useState } from 'react'
import LoginModal from '../Modals/Loginmodal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Mainpage = () => {
    const [authorized, setAuthorized] = useState(false);
    const id = localStorage.getItem('userId');
    const[error, setError] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [page, setPage] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const response = await axios.get(`http://localhost:8087/users/checkNameSurname/${id}`);
                if (response.status === 200) {
                    console.log("deneme");
                    setAuthorized(true);
                }
                else {
                    setAuthorized(false);
                }
            } catch (error) {
                console.error('Authorization check failed:', error);
            }
        };
        if (id) {
            checkAuthorization();
        }
    }, [id]);
    
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:8087/disaster-news/paging?page=${page}`);
                const data = await response.json();
                const firstImageUrl = data.content.length > 0 ? data.content[0].imageUrl : '';
                const firstItem = data.content.length > 0 ? data.content[0] : {};
                setImageUrl(firstImageUrl);
                setTitle(firstItem.title);
                setDescription(firstItem.description);
                setLink(firstItem.link);
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
        window.open(link, '_blank');
    };
    const yardimalHandler = () => {
        
        setError(
            {
                title: "Hata!",
                message: 'Taleplerinizi görüntüleyebilmek için isim ve soyisim bilgilerinizi eklemelisiniz!'
            }
        )
    
}
const errorHandler = () => {
    setError('');
}

  return (
    <div>
        <NavbarAnasayfa/>
        {error && <LoginModal onConfirm={errorHandler} error={error} />}
        <Profil />
        <div className="deprem-haberi">
        <img src={imageUrl} alt="" onClick={() => handleClick(link)} />
            {/* <div className="deprem-haberi-text">
                <span>{title}</span>
            </div> */}
            <div className="pagination2">
              {[...Array(10)].map((_, index) => (
                <span
                  key={index}
                  className={`dot2 ${index === page ? 'active' : ''}`}
                ></span>
              ))}
            </div>
            <div className="left-arro2">
              <FontAwesomeIcon icon={faChevronLeft} size='2x' onClick={handlePrev}/>
            </div>
            <div className="right-arro2">
              <FontAwesomeIcon icon={faChevronRight} size='2x' onClick={handleNext}/>
            </div>
            
        </div>
        <div className="talep-card-mainpage">
            <TalepCard authorized={authorized} />
        </div>
        <div className="arama-anasayfa">
            <span>Afet Adı veya Anahtar Kelime Giriniz(ör: 'Deprem','Sel' vb.)</span>
            <div className="arama">
                <input type="text" placeholder="Aramak İçin Tıklayın..." />
                <img src={search} alt="" />
            </div>
        </div>
        <div className="sosyal-medya-haberler">
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />
            <Sosyalmedya />


        </div>
        


        <Footer 
        />
    </div>
  )
}

export default Mainpage