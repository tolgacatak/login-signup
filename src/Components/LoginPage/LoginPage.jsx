import './LoginPage.css'
import NavbarGiris from '../Navbar/NavbarGiris'
import { Link } from "react-router-dom"
import Footer from '../Footer/Footer'
import BannerImage from "../Assets/kus.jpg"
import BannerImage1 from "../Assets/world_map_home.png"
import BannerImage2 from "../Assets/social.jpg"
import BannerImage3 from "../Assets/images.jfif"
import BannerImage4 from "../Assets/images1.jpg"
import BannerImage5 from "../Assets/images2.jpg"



const LoginPage = () => {
    const imageHandler = () => {
        
    }
    return (
        <div className="loginpage">
            <NavbarGiris />

            <div className="home">
                
                <img className="bannerimage1" src={BannerImage} alt="" />
                
                <div className="title-font">
                
                    <h1>AFETANKANET</h1>
               
                </div>
                
                <div className="text-font">
                    AfetAnkaNET: Afetlerde Yeniden Doğuşunuz İçin Yanınızda!

                    Karşınızda, afetlerle mücadelede en güçlü destekçiniz: AfetAnkaNET. Mitolojik Anka kuşunun yeniden doğuşunu simgeleyen bu platform, afetlerin hemen ardından toparlanma sürecinizi hızlandırmak için tasarlandı.

                    Afetlerde bilgiye erişim hayati öneme sahiptir. AfetAnkaNET, en güncel afet verilerini, sosyal medya akışlarını ve acil durum bilgilerini tek bir platformda toplayarak sizlere ulaştırıyor.

                    Gelin, afetlerin gölgesinde bile güvende olmanın ve topluluklarla birlikte yeniden doğmanın gücünü birlikte deneyimleyelim. AfetAnkaNET, afet bilgilendirme ve yönetiminde yenilikçi bir adım!
                </div>
            </div>

            <div className="afet-buttons">
                <div className="afet-buttons-btn-canli">
                    <Link to="/login">
                    <img onClick={imageHandler} src={BannerImage1} alt="" />
                    </Link>
                    <b>Canlı Afet Haritası</b>
                    <p>Yaşanan afetleri gerçek zamanlı olarak takip edin.</p>
                    <Link to="/login" />
                    
                </div>
                <div className="afet-buttons-btn-sosyal">
                    <Link to="/login">
                    <img onClick={imageHandler} src={BannerImage2} alt="" />
                    </Link>
                    <b>Sosyal Medya Akışı</b>
                    <p>Seçilen Hastag'ler ile afetlere dair paylaşımlara erişin ve bilginin doğruluğunu değerlendirin.</p>
                </div>
                <div className="afet-buttons-btn-haber">
                    <Link to="/login">
                    <img onClick={imageHandler} src={BannerImage3} alt="" />
                    </Link>
                    <b>Afet Haberleri</b>
                    <p>Afetlerle ilgili tüm haberlere anında erişin.</p>
                </div>
                <div className="afet-buttons-btn-yardim">
                    <Link to="/login">
                    <img onClick={imageHandler} src={BannerImage4} alt="" />
                    </Link>
                    <b>Yardımlaşma Platformu</b>
                    <p>Farklı iller için yardım platformları oluşturun, ihtiyaç listesi paylaşın ve diğer kullanıcılarla iletişim kurun.</p>
                </div>
                <div className="afet-buttons-btn-acil">
                    <Link to="/login">
                    <img onClick={imageHandler} src={BannerImage5} alt="" />
                    </Link>
                    <b>Acil Durum Bilgileri</b>
                    <p>Büyük bir afet sonrası yapılması gerekenler, acil numaralar ve daha fazlası.</p>
                </div>
            </div>
            <Footer/>

        </div>
    )
}

export default LoginPage