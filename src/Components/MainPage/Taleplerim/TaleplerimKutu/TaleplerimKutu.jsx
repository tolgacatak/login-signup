
import './TaleplerimKutu.css'
import kutu from './TaleplerimKutuAssets/1.png'
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'

const TaleplerimKutu = () => {
    return (
        <div>
            <div className="talep-kutu-wrapper">
                <div className="talep-kutu-soltaraf">
                    <div className="talep-kutu-userimg">
                        <img src={logo} alt="" />
                    </div>
                    <div className="talep-kutu-gorsel">
                        <img src={kutu} alt="" />
                    </div>
                    <div className="talep-kutu-adsoyad">
                        <h4>Sayın İsim Soyisim</h4>
                    </div>
                    <div className="talep-kutu-aktif">
                        <h2>AKTİF</h2>
                    </div>
                </div>
                <div className="talep-kutu-orta-cizgi">
                </div>
                <div className="talep-kutu-sagtaraf">
                    <div className="talep-kutu-title">
                        <h4>Hatay - Şehit Ahmet İlkokulu Yardım Kutusu</h4>
                    </div>
                    <div className="talep-kutu-content">
                        <p>VAN'da bulunan Şehit Ahmet İlkokulu'nun değerli öğrencilerine yönelik olarak açılan bu yardım kutusu, onların eğitim hayatlarını desteklemek ve günlük ihtiyaçlarını karşılamak amacıyla hazırlandı. Bu kutuda, öğrencilerimiz için gerekli olan kırtasiye malzemeleri, okul çantaları, kitaplar ve giysi gibi temel eğitim materyallerini toplamayı hedefliyoruz. Her çocuğun eğitimine erişiminin önemli olduğuna inanarak, siz değerli bağışçıların desteğiyle onlara daha iyi bir öğrenim ortamı sunmayı amaçlıyoruz. Şehit Ahmet İlkokulu öğrencilerinin eğitimine katkıda bulunmak ve onlara daha parlak bir gelecek sunmak için bağışlarınızı bekliyoruz. Her katkınız, onların hayatında büyük bir fark yaratacaktır. Destekleriniz için şimdiden teşekkür ederiz!</p>
                    </div>
                    <div className="talep-kutu-adres">
                        <p>Şehit Ahmet İlkokulu, Yenişehir Mahallesi, Çiçek Sokak No:15,Çayyolu</p>
                    </div>
                    <div className="talep-kutu-ozet">
                        <p>İlkokul çocuklarına destek</p>
                    </div>
                </div>
                    <div className="talep-kutu-yorum">
                        <img src={logo} alt="" />
                        <div className="talep-kutu-input">
                            <input type="text" placeholder="Yorumunuzu buraya yazınız..." />
                        </div>
                        <div className="talep-kutu-uc-yorum">3 Yorum</div>
                    </div>
            </div>
        </div>
    )
}

export default TaleplerimKutu