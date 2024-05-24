import React from 'react';
import './KVKKModal.css';
import { useState } from 'react';

const KVKKModal = ({
    handleCloseModal
}) => {
    
  return (
    <div className="KVKK-wrapper">
      <header className="KVKK-header">
        <h2>Kişisel Verilerin Korunması Kanunu (KVKK) Aydınlatma Metni</h2>
      </header>
      <section className="KVKK-content">
        <p>Sayın Kullanıcı,</p>
        <p>Afet ve acil durumlarla ilgili bilgilerinizi bizimle paylaştığınız için teşekkür ederiz. Sizinle paylaştığınız bu bilgiler, bizim için son derece değerlidir. Kişisel verilerinizin gizliliği ve güvenliği, büyük bir titizlikle korunmaktadır. Bu nedenle, Türkiye Cumhuriyeti Anayasası ve 6698 sayılı Kişisel Verilerin Korunması Kanunu (“KVKK”) hükümleri gereğince hareket etmekteyiz.</p>
        <p>Bilgileriniz, yalnızca afet yönetimi ve müdahalesi için kullanılacaktır. Verileriniz, afet ve acil durumlarla ilgili analiz ve değerlendirmelerde kullanılmak üzere toplanmaktadır. Bu şekilde, toplumun güvenliği ve refahı için daha etkili önlemler alınması amaçlanmaktadır.</p>
        <p>KVKK kapsamında, kişisel verilerinizin işlenme amacı, yöntemi ve hukuki sebepleri hakkında daha detaylı bilgi almak için lütfen gizlilik politikamızı inceleyiniz.</p>
      </section>
      <footer className="KVKK-tamam">
            <button onClick={handleCloseModal}>Tamam</button>
      </footer>
    </div>
  );
};

export default KVKKModal;
