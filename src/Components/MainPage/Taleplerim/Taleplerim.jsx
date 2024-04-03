import React, { useState } from 'react';
import Navbar from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Navbar\\NavbarAnasayfa';
import Footer from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Footer\\Footer';
import TalepHosgeldinModal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\TalepHosgeldinModal\\TalepHosgeldinModal';
import './Taleplerim.css';
import KisaTalep from './TalepKisa/TalepKisa'
import TaleplerimKutu from './TaleplerimKutu/TaleplerimKutu'
import TalepKisa from './TalepKisa/TalepKisa';
import { useRef } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Taleplerim = () => {
  const [showModal, setShowModal] = useState(true);
  const [showTaleplerimKutu, setShowTaleplerimKutu] = useState(false);
  const [talepKisaClicked, setTalepKisaClicked] = useState(false);
  const taleplerimKutuRef = useRef(null);
  const taleplerimTitle = document.getElementById('talep-kutu-taleplerim');
  if (taleplerimTitle) {
    taleplerimTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  const id = localStorage.getItem('userId');
    const [helpBox, setHelpBox] = useState({});

    useEffect(() => {
        if (!id) {
            // id yoksa işlem yapma
            return;
        }

        axios.get(`http://localhost:8087/helpbox/getHelpBoxesByUserId/${id}`)
            .then((response) => {
                const helpBoxData = response.data; // Sadece ilk talebi alıyoruz, diğerleri için gerekirse uygun bir şekilde döngü kullanabilirsiniz
                setHelpBox(helpBoxData);
            })
            .catch((error) => {
                console.error("Hata:", error);
            });
    }, []);


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
            {talepKisaClicked && showTaleplerimKutu && <div className="destek-kutu-css-taleplerim">
          {helpBox.length > 0 && helpBox.map((box) => (
            <TaleplerimKutu key={box.id} helpBox={box} setHelpBox={setHelpBox} />
          ))}
        </div>}
          </div>  
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Taleplerim;
