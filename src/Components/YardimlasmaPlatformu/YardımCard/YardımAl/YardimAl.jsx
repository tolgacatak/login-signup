import './YardimAl.css';
import yardimal from './YardımAlAssets/1.jpg'
import yardimfoto from './YardımAlAssets/4.png'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Loginmodal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\Loginmodal';

const YardimAl = ({ authorized }) => {
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
    
    <div className='yardimal-wrapper'>
      {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="yardimal-gorsel">
            <img src={yardimal} alt="" />
        </div>
        <div className="yardimal-button">
            <img src={yardimfoto} alt="" />
            <Link className='yardimal-button-link' to={authorized ? "/yardim-al-detay" : onclick = {yardimalHandler}}>
                <button>
                    <p>Yardım Almak İstiyorum</p>
                </button>
            </Link>
        </div>
    </div>
  )
}

export default YardimAl
