import React from 'react';
import './Destek.css';
import foto1 from './DestekAssets/1.png';
import StarRatings from 'react-star-ratings';
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import comment from './DestekAssets/3.png'

const Destek = () => {
  return (
    <div className="destek-card-wrapper">
        <div className="yardim-kutusu-baslik">
            <p>Yardım Kutusu Sahibi:</p>
            <h4>İsim Soyisim</h4>
            <div className="star-ratings">
                <StarRatings 
                rating={3} // Başlangıç puanı (örneğin 2.5)
                starRatedColor="gold" // Dolu yıldız rengi
                starEmptyColor="gray" // Boş yıldız rengi
                starDimension="20px" // Yıldız boyutu
                starSpacing="2px" // Yıldızlar arası boşluk
                />
            </div>
            <img src={foto1} alt="" />
            <div className="yardim-aktif">
                <h2>AKTİF</h2>
            </div>
            <div className="yardim-iletisime-gec">
                <button>İletişime Geç</button>
            </div>
        </div>
        <div className="yardim-orta-cizgi">

        </div>
        <div className="yardim-sag-taraf">
            <div className="yardim-sag-title">
                <h4>Şehit Ahmet İlkokulu Yardım Kutusu</h4>
            </div>
            <div className="yardim-sag-content">
                <p>VAN'da bulunan Şehit Ahmet İlkokulu'nun değerli öğrencilerine yönelik olarak açılan bu yardım kutusu, onların eğitim hayatlarını desteklemek ve günlük ihtiyaçlarını karşılamak amacıyla hazırlandı. Bu kutuda, öğrencilerimiz için gerekli olan kırtasiye malzemeleri, okul çantaları, kitaplar ve giysi gibi temel eğitim materyallerini toplamayı hedefliyoruz. Her çocuğun eğitimine erişiminin önemli olduğuna inanarak, siz değerli bağışçıların desteğiyle onlara daha iyi bir öğrenim ortamı sunmayı amaçlıyoruz. Şehit Ahmet İlkokulu öğrencilerinin eğitimine katkıda bulunmak ve onlara daha parlak bir gelecek sunmak için bağışlarınızı bekliyoruz. Her katkınız, onların hayatında büyük bir fark yaratacaktır. Destekleriniz için şimdiden teşekkür ederiz!</p>
            </div>
        </div>
        <div className="yardim-yorum-yap">
            <img src={logo} alt="" />
            <div className="yardim-input">
                <input type="text" placeholder="Yorumunuzu buraya yazınız..." />
            </div>
            <div className="yardim-comment-icon">
                <img src={comment} alt="" />
                
            </div>
            <div className='uc-yorum'>3</div>
            <div className="uc-yorum-iki">Yorum</div>

        </div>
        
    </div>
  );
}

export default Destek;
