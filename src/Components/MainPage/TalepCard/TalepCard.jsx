import './TalepCard.css'
import foto1 from './TalepCardAssets/1.png'
import Loginmodal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\Loginmodal';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const TalepCard = ({ authorized }) => {
  const[error, setError] = useState(false);
  const errorHandler = () => {
    setError('');
  }
  const yardimalHandler = () => {
    setError(
      {
        title: "Hata!",
        message: 'Talep  için isim ve soyisim bilgilerinizi eklemelisiniz.'
      }
    )
  }
  return (
    <div className="talepcard-wrapper">
      {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="talepcard-foto">
            <img src={foto1} alt="" />
        </div>
        <Link className='taleplerim-card' to={authorized ? "/taleplerim" : onclick = {yardimalHandler}}>
          <div className="talepcard-button">
              <button>Taleplerim</button>
          </div>
        </Link>
    </div>
  )
}

export default TalepCard