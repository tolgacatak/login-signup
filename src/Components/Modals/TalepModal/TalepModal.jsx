import React, { useState, useEffect } from 'react';
import './TalepModal.css';
import { Link, useNavigate } from 'react-router-dom';
import TalepYokModal from '../TalepYokModal/TalepYokModal';
import axios from 'axios';

const TalepModal = ({ onClose }) => {
  const [hasRequests, setHasRequests] = useState(null);
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!userId) {
      setHasRequests(false);
      return;
    }

    axios.get(`http://localhost:8087/helpbox/getHelpBoxesByUserId/${userId}`)
      .then(response => {
        const helpBoxData = response.data;
        setHasRequests(helpBoxData.length > 0);
      })
      .catch(error => {
        console.error('Hata:', error);
        setHasRequests(false);
      });
  }, [userId]);

  const handleViewRequests = () => {
    if (hasRequests) {
      navigate('/taleplerim');
    } else {
      setShowNoRequestsModal(true);
    }
  };

  const [showNoRequestsModal, setShowNoRequestsModal] = useState(false);

  const closeNoRequestsModal = () => {
    setShowNoRequestsModal(false);
    setError(
        {
            title: 'Talep Bulunamadı',
            message: 'Henüz bir talebiniz bulunmamaktadır.'
        }
    )
    
  };

  return (
    <div className="talep-modal-wrapper">
      <header className="talep-modal-title">
        <h2>Talebinizi;</h2>
      </header>
      <section className="talep-modal-olustur">
        <Link className='talep-modal-olustur-link1' to="/destek-iste">
          <button>Oluşturun</button>
        </Link>
      </section>
      <section className="talep-modal-görüntüle">
        <button className='talep-modal-olustur-link2' onClick={handleViewRequests}>
          Görüntüleyin
        </button>
      </section>
      <section className="talep-modal-tamam">
        <button onClick={onClose}>Tamam</button>
      </section>

      {showNoRequestsModal && <TalepYokModal onClose={closeNoRequestsModal} error={error}/>}
    </div>
  );
}

export default TalepModal;
