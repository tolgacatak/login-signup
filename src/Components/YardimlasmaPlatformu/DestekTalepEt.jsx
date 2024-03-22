
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

useEffect(() => {
    getSehirler();
    getCategories();
}, []);
    
  return (
    <div>
        <Navbar />
        
            <div className="destek-iste-container">
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
                    <textarea placeholder='Dikkat:Özet bölümü için gireceğiniz metin en fazla 1000 karakter uzunluğunda olmalıdır!' />
                </div>
                <div className="destek-baslik2">
                    <p><b>*Talebin Amacı :</b></p>
                </div>
                <div className="destek2-icerik">
                    <textarea placeholder='Dikkat:Amaç bölümünü sadece birkaç kelimeyle özetleyiniz!' />
                </div>
                <div className="destek-baslik3">
                    <p><b>Yardım Adresi :</b></p>
                </div>
                <div className="destek3-icerik">
                    <textarea placeholder='Dikkat: Bu alanın doldurulması zorunlu değildir.' />
                </div>
                <div className="destek-baslik4">
                    <p><b>*Şehir :</b></p>
                </div>
                <div className="destek4-icerik">
                    <select name="sehirler" id="sehirler">
                        {sehirler.map((sehir, index) => (
                            <option key={index} value={sehir}>{sehir}</option>
                        ))}
                    </select>
                </div>
                <div className="destek-baslik5">
                    <p><b>*Yardım Kategorileri :</b></p>
                </div>
                <div className="destek5-icerik">
                    {categories.reduce((acc, category, index) => {
                        if (index % 4 === 0) {
                            acc.push([]);
                        }
                        acc[acc.length - 1].push(
                            <div key={index}>
                                <input type="checkbox" id={`category${index}`} name={`category${index}`} value={category} />
                                <label htmlFor={`category${index}`}>{category}</label>
                            </div>
                        );
                        return acc;
                    }, []).map((group, index) => (
                        <div key={index} className="category-group">
                            {group}
                        </div>
                    ))}
                </div>
                <div className="destek-al-uyari">
                    <p><b>Dikkat: Tüm yıldızlı alanların doldurulması zorunludur.</b></p>
                </div>
                <div className="destek-al-talebi-gonder">
                    <button type='submit'>Talebi Gönder</button>
                </div>
            </div>
        
        <Footer />

    </div>
  )
}

export default DestekTalepEt