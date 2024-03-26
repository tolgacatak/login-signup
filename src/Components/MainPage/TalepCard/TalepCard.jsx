import './TalepCard.css'
import foto1 from './TalepCardAssets/1.png'

const TalepCard = () => {
  return (
    <div className="talepcard-wrapper">
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