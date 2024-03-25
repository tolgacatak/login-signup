import './YardimYap.css'
import yardimyap from './YardımYapAssets/4.jpg'
import yardim from './YardımYapAssets/3.png'
import { useState } from 'react';
import Loginmodal from 'C:\\Users\\User\\Desktop\\login-signup\\login-signup\\src\\Components\\Modals\\Loginmodal';
import { Link } from 'react-router-dom';

const YardimYap = ({ authorized }) => {
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
    <div className='yardimyap-wrapper'>
      {error && <Loginmodal onConfirm={errorHandler} error={error} />}
        <div className="yardimyap-gorsel">
            <img src={yardimyap} alt="" />
        </div>
        <div className="yardimyap-button">
        <img src={yardim} alt="" />
          <Link className='yardimyap-button-link' to={authorized ? "/yardim-yap" : onclick = {yardimalHandler}}>
            <button>
                <p>Yardım Yapmak İstiyorum</p>
            </button>
          </Link>
        </div>

    </div>
  )
}

export default YardimYap