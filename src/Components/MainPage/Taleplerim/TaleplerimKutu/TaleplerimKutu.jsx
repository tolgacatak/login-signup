import './TaleplerimKutu.css';
import kutu from './TaleplerimKutuAssets/1.png';
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaleplerimKutu = () => {
    const id = localStorage.getItem('userId');
    const [helpBox, setHelpBox] = useState({});

    useEffect(() => {
        if (!id) {
            // id yoksa işlem yapma
            return;
        }

        axios.get(`http://localhost:8087/helpbox/getHelpBoxesByUserId/${id}`)
            .then((response) => {
                const helpBoxData = response.data[0]; // Sadece ilk talebi alıyoruz, diğerleri için gerekirse uygun bir şekilde döngü kullanabilirsiniz
                setHelpBox(helpBoxData);
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
    }, []);

    return (
        <div>
            <div className="talep-kutu-wrapper">
                <div className="talep-kutu-soltaraf">
                    <div className="talep-kutu-userimg">
                    <img src={helpBox.user?.profilePicture ? `data:image/png;base64,${helpBox.user?.profilePicture}` : logo} alt="" />
                    </div>
                    <div className="talep-kutu-gorsel">
                        <img src={kutu} alt="" />
                    </div>
                    <div className="talep-kutu-adsoyad">
                        <h4>Sayın {helpBox.user?.nameSurname}</h4>
                    </div>
                    <div className="talep-kutu-aktif">
                        <h2>{helpBox.active ? 'AKTİF' : ''}</h2>
                    </div>
                </div>
                <div className="talep-kutu-orta-cizgi">
                </div>
                <div className="talep-kutu-sagtaraf">
                    <div className="talep-kutu-title">
                        <h4>{helpBox.city} - {helpBox.purpose}</h4>
                    </div>
                    <div className="talep-kutu-content">
                        <p>{helpBox.summary}</p>
                    </div>
                    <div className="talep-kutu-adres">
                        <p>{helpBox.contactInfo}</p>
                    </div>
                    <div className="talep-kutu-ozet">
                        <p>{helpBox.purpose}</p>
                    </div>
                </div>
               
            </div>
        </div>
    );
}

export default TaleplerimKutu;
