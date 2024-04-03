
import './DestekTalepEt.css'
import Navbar from '../Navbar/NavbarAnasayfa'
import Footer from '../Footer/Footer'
import foto1 from './DestekAssets/1.png'
import foto2 from './DestekAssets/2.png'
import foto3 from './DestekAssets/3.png'
import foto4 from './DestekAssets/4.png'
import { useEffect, useState } from 'react';
import axios from 'axios';

const DestekTalepEt = () => {
    const [sehirler, setSehirler] = useState([]);
    const [categories, setCategories] = useState([]);
    const [ozet, setOzet] = useState('');
    const [amac, setAmac] = useState('');
    const [adres, setAdres] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [userInfo, setUserInfo] = useState(null);

    const cityHandler = (e) => {
        setSelectedCity(e.target.value);
    };
    
    const categoryHandler = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedCategories([...selectedCategories, value]);
        } else {
            setSelectedCategories(selectedCategories.filter(cat => cat !== value));
        }
    };

    const ozetHandler = (e) => {
        setOzet(e.target.value);
    };
    const amacHandler = (e) => {
        setAmac(e.target.value);
    };
    const adresHandler = (e) => {
        setAdres(e.target.value);
    };
    

const getSehirler = async () => {
    try {
        const response = await axios.get('http://localhost:8087/helpbox/cities');
        setSehirler(response.data);
    } catch (error) {
        console.error('Error fetching cities:', error);
    }
};
const getCategories = async () => {
    try {
        const response = await axios.get('http://localhost:8087/helpbox/categories');
        setCategories(response.data);
    } catch (error) {
        console.error('Error fetching categories:', error);
    }
};
const fetchUserInfo = async () => {
    try {
        const response = await axios.get(`http://localhost:8087/users/getProfileInfo/${localStorage.getItem('userId')}`);
        setUserInfo(response.data);
    } catch (error) {
        console.error('Error fetching user info:', error);
    }
};


useEffect(() => {
    getSehirler();
    getCategories();
    fetchUserInfo();
}, []);
const handleSubmit = async (e) => {
    e.preventDefault();
    if (ozet.trim() === '' || amac.trim() === '' || selectedCity === '' || selectedCategories.length === 0) {
        alert('Lütfen tüm yıldızlı alanları doldurun.');
        return;
    }
    try {
        const response = await axios.post('http://localhost:8087/helpbox/createHelpBox', {
            summary: ozet,
            categories: selectedCategories,
            contactInfo: adres,
            city: selectedCity,
            purpose: amac,
            user: userInfo
        });
        console.log('Post response:', response);
        // Şehirler ve kategorileri güncelle
        getSehirler();
        getCategories();

        alert('Destek talebiniz gönderilmiştir.');
        window.location.reload();
    } catch (error) {
        console.error('Error creating help box:', error);
        if (error.response && error.response.status === 400) {
            alert('Talep oluşturma işleminiz gerçekleştirilemedi. Lütfen alanları doğru şekilde doldurunuz!');
        } else {
            alert('Beklenmeyen bir hata oluştu. Lütfen daha sonra tekrar deneyin.');
        }
    }
};

    
  return (
    <div>
        <Navbar />
        
            <form className="destek-iste-container" onSubmit={handleSubmit}>
                <div className="destek-gunes">
                    <img src={foto2} alt="" />
                </div>
                <div className="destek-iste-title">
                    <h2>Yardım Kutusu</h2>
                </div>
                <div className="destek-atac">
                    <img src={foto4} alt="" />
                </div>
                <div className="destek-cicek">
                    <img src={foto3} alt="" />
                </div>
                <div className="destek-baslik1">
                    <p><b>*Talebin Özeti :</b></p>
                </div>
                <div className="destek1-icerik">
                    <textarea placeholder='Dikkat:Özet bölümü için gireceğiniz metin en fazla 1000 karakter uzunluğunda olmalıdır!' onChange={ozetHandler} />
                </div>
                <div className="destek-baslik2">
                    <p><b>*Talebin Amacı :</b></p>
                </div>
                <div className="destek2-icerik">
                    <textarea placeholder='Dikkat:Amaç bölümünü sadece birkaç kelimeyle özetleyiniz!' onChange={amacHandler} />
                </div>
                <div className="destek-baslik3">
                    <p><b>Yardım Adresi :</b></p>
                </div>
                <div className="destek3-icerik">
                    <textarea placeholder='Dikkat: Bu alanın doldurulması zorunlu değildir.' onChange={adresHandler} />
                </div>
                <div className="destek-baslik4">
                    <p><b>*Şehir :</b></p>
                </div>
                <div className="destek4-icerik">
                    <select name="sehirler" id="sehirler" onChange={cityHandler} value={selectedCity} >
                        {sehirler.map((sehir, index) => (
                            <option key={index} value={sehir}>{sehir}</option>
                        ))}
                    </select>
                </div>
                <div className="destek-baslik5">
                    <p><b>*Yardım Kategorileri :</b></p>
                </div>
                <div className="destek5-icerik">
                    {categories.map((category, index) => (
                        <div key={index}>
                            <input
                                type="checkbox"
                                id={`category${index}`}
                                name={`category${index}`}
                                value={category}
                                onChange={categoryHandler}
                                checked={selectedCategories.includes(category)}
                            />
                            <label htmlFor={`category${index}`}>{category}</label>
                         </div>
                    ))}
                </div>

                <div className="destek-al-uyari">
                    <p><b>Dikkat: Tüm yıldızlı alanların doldurulması zorunludur.</b></p>
                </div>
                <div className="destek-al-talebi-gonder">
                    <button type='submit' >Talebi Gönder</button>
                </div>
            </form>
        
        <Footer />

    </div>
  )
}

export default DestekTalepEt