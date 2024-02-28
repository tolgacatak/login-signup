import React from 'react'
import NavbarGiris from '../../Navbar/NavbarGiris'
import Footer from '../Footer'
import './Gizlilik.css'
import NavbarAnasayfa from '../../Navbar/NavbarAnasayfa'

const gizlililk = () => {
    const userId = localStorage.getItem('userId');
    return (
        <>
            {userId ? <NavbarAnasayfa /> : <NavbarGiris />}
            <div className="gizlilik-container">
                <div className="gizlilik-title">
                    <h1>Gizlilik Sözleşmesi</h1>
                </div>
                <div className="gizlilik-content">
                    <div className="gizlilik1">
                        <h3>
                            •Toplanan Bilgiler
                        </h3>
                        <p>
                            Hizmetimizi kullanırken, kullanıcılarımızdan kişisel olarak tanımlanabilir bilgiler (ad, e-posta adresi, telefon numarası vb.) toplayabiliriz. Ayrıca, Hizmetimizi kullanımınıza ilişkin diğer bilgileri de toplayabiliriz, bu bilgiler kullanıcı deneyimini geliştirmek ve hizmetlerimizi optimize etmek amacıyla kullanılabilir.
                        </p>
                    </div>
                    <div className="gizlilik2">
                        <h3>
                            •Kullanım ve Paylaşım
                        </h3>
                        <p>
                            Topladığımız kişisel bilgileri yalnızca Hizmetimizi sunmak ve geliştirmek için kullanırız. Bu bilgileri üçüncü taraflarla paylaşmadan önce kullanıcılarımızın açık rızasını alırız, ancak yasal gereklilikler veya Hizmetimizi iyileştirmek için hizmet sağlayıcılarla bilgi paylaşımı yapabiliriz.           
                        </p>
                    </div>
                    <div className="gizlilik3">
                        <h3>
                            •Çerezler
                        </h3>
                        <p>
                        Hizmetimizi kullanırken çerezler gibi teknolojileri kullanabiliriz. Bu teknolojiler, kullanıcı deneyimini geliştirmek ve tercihlerinizi hatırlamak için kullanılır. Çerezleri reddetme veya devre dışı bırakma seçeneğiniz vardır, ancak bazı durumlarda Hizmetimizin bazı özelliklerinin çalışmamasına neden olabilir.
                        </p>
                    </div>
                    <div className="gizlilik4">
                        <h3>
                            •Güvenlik
                        </h3>
                        <p>
                        Kullanıcı bilgilerini korumak için makul güvenlik önlemlerini alırız, ancak hiçbir veri iletim veya depolama yönteminin %100 güvenli olmadığını unutmayın. Bu nedenle, bilgilerinizi Hizmetimize sağlarken dikkatli olmanızı öneririz.
                        </p> 
                    </div>
                    <div className="gizlilik5">
                        <h3>
                            •Değişiklikler
                        </h3>
                        <p>
                        Gizlilik politikamızı güncel tutmak için zaman zaman değişiklikler yapabiliriz. Bu nedenle, bu sayfayı düzenli olarak kontrol etmenizi öneririz. Değişikliklerden haberdar olmanız için size bildirimde bulunacağız.                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default gizlililk