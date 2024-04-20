import React from 'react';
import './Destek.css';
import foto1 from './DestekAssets/1.png';
import StarRatings from 'react-star-ratings';
import logo from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Assets\\user.png'
import comment from './DestekAssets/3.png'
import axios from 'axios';
import { useEffect, useState } from 'react';

const Destek = ({helpBox}) => {
  

  return (
    <div className="destek-card-wrapper">
        
        <div className="yardim-kutusu-baslik">
            <p>Yardım Kutusu Sahibi:</p>
            <h4>{helpBox.user?.nameSurname}</h4>
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
                <h2><h2>{helpBox.active ? 'AKTİF' : ''}</h2></h2>
            </div>
            <div className="yardim-iletisime-gec">
                <button>İletişime Geç</button>
            </div>
        </div>
        <div className="yardim-orta-cizgi">

        </div>
        <div className="yardim-sag-taraf">
            <div className="yardim-sag-title">
                <h4>{helpBox.city} - {helpBox.purpose}</h4>
            </div>
            <div className="yardim-sag-content">
                <p>{helpBox.summary}</p>
            </div>
            <div className="yardim-kutu-adres">
                <p>{helpBox.contactInfo}</p>
            </div>
            <div className="yardim-kutu-kategori">
                <p>
                    {helpBox.categories.map((category, index) => (
                        <span key={index}>
                            {category}
                            {index !== helpBox.categories.length - 1 && " - "}
                        </span>
                    ))}
                </p>
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
