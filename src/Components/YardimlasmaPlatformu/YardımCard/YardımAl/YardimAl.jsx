import'./YardimAl.css';
import yardimal from './YardımAlAssets/1.jpg'
import yardim from './YardımAlAssets/4.png'

const YardimAl = () => {
  return (
    <div className='yardimal-wrapper'>
        <div className="yardimal-gorsel">
            <img src={yardimal} alt="" />
        </div>
        <div className="yardimal-button">
        <img src={yardim} alt="" />
            <button>
                <p>Yardım Almak İstiyorum</p>
            </button>
        </div>
    </div>
  )
}

export default YardimAl