import React, { useState } from 'react';
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa';
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer';
import TalepHosgeldinModal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\TalepHosgeldinModal\\TalepHosgeldinModal';
import './Taleplerim.css';

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
        
      </div>
      <Footer />
    </div>
  );
};

export default Taleplerim;
