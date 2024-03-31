import React, { useState } from 'react';
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa';
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer';
import TalepHosgeldinModal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\TalepHosgeldinModal\\TalepHosgeldinModal';
import './Taleplerim.css';
import AktifTalep from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\YardimlasmaPlatformu\\DestekKutu\\Destek';
import TaleplerimKutu from './TaleplerimKutu/TaleplerimKutu'

const Taleplerim = () => {
  const [showModal, setShowModal] = useState(true);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Navbar />
      <div className="taleplerim-wrapper">
        {showModal && <TalepHosgeldinModal onClose={handleCloseModal} />}
        <div className="aktif-talepler">
          <div className="aktif-talepler-title">
            <h1>Aktif Talepleriniz</h1>
          </div>
          <div className="aktif-talepler">
            <TaleplerimKutu />
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Taleplerim;
