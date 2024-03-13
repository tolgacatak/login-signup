import React, { useState } from 'react';
import axios from 'axios';
import './ForgetPassword.css';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate ekledik
import gorsel from '../Assets/logo.jpeg';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate(); // useNavigate'i tanımladık

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`http://localhost:8087/users/request/${email}`);
      navigate('/CodePage');
    } catch (error) {
      console.error('Hata:', error);
    }
  };

  return (
    <div className="container-forget">
      <div className="header-forget">
        <div className="img-forget">
          <img src={gorsel} alt="" />
        </div>
        <div className="text-forget">Şifremi Unuttum</div>
        <div className="underline-forget"></div>
      </div>
      <form className="inputs-forget" onSubmit={handleSubmit}>
        <div className="label-forget">
          <h2>Mail Adresinizi Girin</h2>
        </div>
        <div className="input-forget">
          <input
            type="text"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="submit-container-forget">
          <button type="submit" className="submit-forget">
            Gönder
          </button>
        </div>
      </form>
    </div>
  );
};

export default ForgetPassword;
