import './TalepKisa.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TalepKisa = ({ onClick }) => {
    const id = localStorage.getItem('userId');
    const [kisaUser, setKisaUser] = useState({});

    useEffect(() => {
        if (!id) {
            // id yoksa işlem yapma
            return;
        }
        
        axios.get(`http://localhost:8087/helpbox/getHelpBoxesByUserId/${id}`)
            .then((response) => {
                const kisaUser = response.data[0]; // Sadece ilk talebi alıyoruz, diğerleri için gerekirse uygun bir şekilde döngü kullanabilirsiniz
                setKisaUser(kisaUser);
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
      }, []);
  return (
    
    <div className='talep-kisa-wrapper' onClick={onClick}>
        <div className="talep-kisa-aktif">
            <h2>{kisaUser.active ? 'AKTİF' : 'PASİF'}</h2>
        </div>
        <div className="talep-kisa-ortacizgi">

        </div>
        <div className="talep-kisa-ozet">
            <h4>{kisaUser.city}-{kisaUser.purpose}</h4>
        </div>
    </div>
  )
}

export default TalepKisa