import React from 'react';
import './TalepHosgeldinModal.css';

const TalepHosgeldinModal = ({ onClose }) => {
  const handleClose = () => {
    onClose(); // onClose işlevini çağırarak modalı kapatın
  };

  return (
    <div className="talep-hoseldin-wrapper">
      <header className="talep-hosgeldin-header">
        <h1>Taleplerim Sayfasında;</h1>
      </header>
      <section className="talep-hosgeldin-icerik">
        <p>Aktif taleplerinizi hem görüntüleyebilir hem de düzenleyebilirsiniz.</p>
      </section>
      <footer className="talep-hosgeldin-footer">
        <button onClick={handleClose}>Tamam</button> {/* handleClose işlevini Tamam butonuna bağlayın */}
      </footer>
    </div>
  );
};

export default TalepHosgeldinModal;
