import React, { useState } from 'react';
import './TalepCard.css';
import foto1 from './TalepCardAssets/1.png';
import Loginmodal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\Loginmodal';
import { Link } from 'react-router-dom';
import TalepModal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\TalepModal\\TalepModal';

const TalepCard = ({ authorized }) => {
  const [error, setError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const errorHandler = () => {
    setError('');
  };

  const yardimalHandler = () => {
    setError({
      title: 'Hata!',
      message: 'Talep için isim ve soyisim bilgilerinizi eklemelisiniz.',
    });
  };

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="talepcard-wrapper">
      {error && <Loginmodal onConfirm={errorHandler} error={error} />}
      {showModal && <TalepModal onClose={handleModalClose} />}
      <div className="talepcard-foto">
        <img src={foto1} alt="" />
      </div>
      <div className="talepcard-aciklama-yazi">
        <p>
          Destek talebi oluşturmak, talebinizi düzenlemek veya görüntülemek için <b>Taleplerim</b> butonuna tıklayınız.
        </p>
      </div>
      <div className="taleplerim-card" onClick={authorized ? handleModalOpen : yardimalHandler}>
        <div className="talepcard-button">
          <button>Taleplerim</button>
        </div>
      </div>
    </div>
  );
};

export default TalepCard;
