import React, { useState } from 'react';
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa';
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer';
import TalepHosgeldinModal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\TalepHosgeldinModal\\TalepHosgeldinModal';
import './Taleplerim.css';
import KisaTalep from './TalepKisa/TalepKisa'
import TaleplerimKutu from './TaleplerimKutu/TaleplerimKutu'
import TalepKisa from './TalepKisa/TalepKisa';
import { useRef } from 'react';

const Taleplerim = () => {
  const [showModal, setShowModal] = useState(true);
  const [showTaleplerimKutu, setShowTaleplerimKutu] = useState(false);
  const [talepKisaClicked, setTalepKisaClicked] = useState(false);
  const taleplerimKutuRef = useRef(null);
  const taleplerimTitle = document.getElementById('talep-kutu-taleplerim');
  if (taleplerimTitle) {
    taleplerimTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }



  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleTalepKisaClick = () => {
    setTalepKisaClicked(true);
    setShowTaleplerimKutu(prevState => !prevState);
    taleplerimKutuRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  

  return (
    <div>
      <Navbar />
      <div className="taleplerim-wrapper">
        {showModal && <TalepHosgeldinModal onClose={handleCloseModal} />}
        <div className="aktif-talepler">
          <div className="aktif-talepler-title">
            <h1>Talepleriniz</h1>
          </div>
          <div className="talepler-kisa-ekran">
            <TalepKisa onClick={handleTalepKisaClick} />
          </div>
          <div ref={taleplerimKutuRef}>
            {talepKisaClicked && showTaleplerimKutu && <div className='talep-kutu-taleplerim'>
              <TaleplerimKutu/>
            </div> }
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Taleplerim;
