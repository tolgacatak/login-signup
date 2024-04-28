import React, { useState } from 'react';
import './IletisimeGecModal.css';
import { Link } from 'react-router-dom';
import KVKK from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\KVKKModal\\KVKKModal.jsx'  
import axios from 'axios';
import { useEffect } from 'react';

const IletisimeGecModal = ({helpBox, handleModalToggle}) => {
  const [kvkkModalOpen, setKvkkModalOpen] = useState(false);
  const [content, setContent] = useState('');
  const [userData, setUserData] = useState({});
  const [isChecked, setIsChecked] = useState(false);
  const [closeModal, setCloseModal] = useState(false);

  const toggleKvkkModal = () => {
    setKvkkModalOpen(!kvkkModalOpen);
  };
  const contenHandler = (e) => {
    setContent(e.target.value)
  }
  const checkboxHandler = () => {
    setIsChecked(!isChecked);
  };
  useEffect(() => {
    const id = localStorage.getItem('userId');
    if (!id) {
        // id yoksa işlem yapma
        return;
    }

    axios.get(`http://localhost:8087/users/getProfileInfo/${id}`)
        .then((response) => {
            setUserData(response.data);
        })
        .catch((error) => {
            console.error("Hata:", error);
        });
}, []);
const contactHandler = () => {
    if (content.trim() === '' ) {
        // İçerik boşsa veya checkbox işaretlenmemişse işlem gerçekleştirme
        alert('Lütfen içerik alanını doldurunuz!');
        return;
      }
    if (!isChecked) {
        alert('Lütfen KVKK kapsamında bilgilendirildiğinizi onaylayınız!');
        return;
        }
    const data = {
      email: userData.email,
      username: userData.username,
      emailContent: content
    };

    axios.post(`http://localhost:8087/helpbox/send-email/${helpBox.id}`, data)
      .then((response) => {
        alert('Mail başarıyla gönderildi!');
        setCloseModal(true);
        
        
      })
      .catch((error) => {
        console.error('Hata:', error);
      });
  };
  if (closeModal) {
    handleModalToggle();
  }


  return (
    <div className="iletisime-gec-wrapper">
      <header className="iletisime-gec-title">
        <h2>İletişime Geç</h2>
      </header>
      <section className="iletisime-gec-content">
        <p>
          <b>Mail adresimin yardım kutusu sahibiyle paylaşılmasını kabul ediyorum.</b>
        </p>
        
        <p>
          <input type="checkbox" checked={isChecked} onChange={checkboxHandler} /> <Link onClick={toggleKvkkModal}>KVKK</Link> kapsamında bilgilendirildim.
        </p>
      </section>
        <section className="iletisime-gec-yazi">
            <input type="text" placeholder='Mail içeriğinizi yazınız.' onChange={contenHandler}/>
        </section>
      <footer className="iletisime-gec-tamam">
        <button onClick={contactHandler}>Tamam</button>
      </footer>

      {kvkkModalOpen && <KVKK
        handleCloseModal={toggleKvkkModal}
      />}
    </div>
  );
};

export default IletisimeGecModal;
