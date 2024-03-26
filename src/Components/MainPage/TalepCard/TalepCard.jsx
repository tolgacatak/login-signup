import './TalepCard.css'
import foto1 from './TalepCardAssets/1.png'
import Loginmodal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\Loginmodal';
import { useState } from 'react';


const TalepCard = () => {
  const[error, setError] = useState(false);
  const errorHandler = () => {
    setError('');
  }
  const yardimalHandler = () => {
    setError(
      {
        title: "Hata!",
        message: 'Talep oluşturabilmek için isim ve soyisim bilgilerinizi eklemelisiniz.'
      }
    )
  }
  return (
    <div className="talepcard-wrapper">
      {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="talepcard-foto">
            <img src={foto1} alt="" />
        </div>
        <div className="talepcard-button">
            <button>Taleplerim</button>
        </div>
    </div>
  )
}

export default TalepCard