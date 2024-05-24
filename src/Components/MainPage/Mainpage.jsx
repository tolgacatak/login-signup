import NavbarAnasayfa from "../Navbar/NavbarAnasayfa";
import Footer from "../Footer/Footer";
import Profil from "./Profil/Profil";
import './Mainpage.css';
import search from '../Assets/search.png';
import Sosyalmedya from "./Sosyalmedya/Sosyalmedya";
import TalepCard from "./TalepCard/TalepCard";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import BulunamadiModal from "../Modals/BulunamadiModal/BulunamadiModal";

const Mainpage = () => {
    const [authorized, setAuthorized] = useState(false);
    const id = localStorage.getItem('userId');
    const [error, setError] = useState(false);
    const [imageUrl, setImageUrl] = useState('');
    const [page, setPage] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [link, setLink] = useState('');
    const [newsData, setNewsData] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [previousNewsData, setPreviousNewsData] = useState([]);
    const [showNoResultModal, setShowNoResultModal] = useState(false);
    const [contentPage, setContentPage] = useState(0);
    const [newsData2, setNewsData2] = useState([]);
    const [showSearch, setShowSearch] = useState(false);

    useEffect(() => {
        const checkAuthorization = async () => {
            try {
                const response = await axios.get(`http://localhost:8087/users/checkNameSurname/${id}`);
                if (response.status === 200) {
                    setAuthorized(true);
                } else {
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

    useEffect(() => {
        async function fetchTweet() {
            try {
                const response = await axios.get(`http://localhost:8085/api/contents/paging?page=${contentPage}`);
                setNewsData(response.data.content);
                setPreviousNewsData(response.data.content);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchTweet();
    }, [contentPage]);

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
        setError({
            title: "Hata!",
            message: 'Taleplerinizi görüntüleyebilmek için isim ve soyisim bilgilerinizi eklemelisiniz!'
        });
    };

    const errorHandler = () => {
        setError('');
    };

    const handleSearch = () => {
        axios.get(`http://localhost:8085/api/contents/search?text=${searchText}`)
            .then(response => {
                setNewsData2(response.data);
                setShowSearch(true);
                if (response.data.length === 0) {
                    setShowNoResultModal(true);
                } else {
                    setShowNoResultModal(false);
                }
            })
            .catch(error => {
                console.error('Error fetching data: ', error);
                setShowNoResultModal(true);
            });
    };

    const handleInputChange = (e) => {
        setSearchText(e.target.value);
        if (e.target.value === '') {
            setNewsData(previousNewsData);
            setShowSearch(false);
        }
    };

    const onClose = () => {
        setShowNoResultModal(!showNoResultModal);
    };

    return (
        <div>
            <NavbarAnasayfa />
            {showNoResultModal && <BulunamadiModal onClose={onClose} />}
            <Profil />
            <div className="deprem-haberi">
                <span>Afet Haberleri</span>
                <img src={imageUrl} alt="" onClick={handleClick} />
                <div className="pagination2">
                    {[...Array(10)].map((_, index) => (
                        <span
                            key={index}
                            className={`dot2 ${index === page ? 'active' : ''}`}
                        ></span>
                    ))}
                </div>
                <div className="left-arro2">
                    <FontAwesomeIcon icon={faChevronLeft} size='2x' onClick={handlePrev} />
                </div>
                <div className="right-arro2">
                    <FontAwesomeIcon icon={faChevronRight} size='2x' onClick={handleNext} />
                </div>
            </div>
            <div className="talep-card-mainpage">
                <TalepCard authorized={authorized} />
            </div>
            <div className="arama-anasayfa">
                <span>Afet Adı veya Anahtar Kelime Giriniz(ör: 'Deprem','Sel' vb.)</span>
                <div className="arama">
                    <input type="text" placeholder="Aramak İçin Tıklayın..." value={searchText} onChange={handleInputChange} />
                    <img src={search} alt="" onClick={handleSearch} />
                </div>
            </div>
            <div className="sosyal-medya-haberler">
                {showSearch ? (
                    newsData2.map((tweet, index) => (
                        <Sosyalmedya key={index} tweet={tweet} />
                    ))
                ) : (
                    newsData.map((tweet, index) => (
                        <Sosyalmedya key={index} tweet={tweet} />
                    ))
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Mainpage;
