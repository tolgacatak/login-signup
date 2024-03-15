import './YardimYap.css'
import yardimyap from './YardımYapAssets/2.jpg'
import yardim from './YardımYapAssets/3.png'

const YardimYap = () => {
  return (
    <div className='yardimyap-wrapper'>
        <div className="yardimyap-gorsel">
            <img src={yardimyap} alt="" />
        </div>
        <div className="yardimyap-button">
        <img src={yardim} alt="" />
            <button>
                <p>Yardım Yap</p>
            </button>
        </div>

    </div>
  )
}

export default YardimYap