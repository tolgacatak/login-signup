import './HaberCard.css'
import foto from './HaberCardAssets/1.jpg'

const HaberCard = () => {
  return (
    <div className="haber-card-wrapper">
        <div className="haber-card-resim">
           <img src={foto} alt="" /> 
        </div>
        <div className="haber-card-title">
            <h3>Ankara'da gök gürültülü sağnak bekleniyor</h3>
        </div>
        <div className="haber-card-cizgi">

        </div>
        <div className="haber-card-aciklama">
             Meteoroloji Genel Müdürlüğü tarafından yapılan açıklamaya göre, Ankara'da bu akşam gök gürültülü sağanak yağışın yerel kuvvetli olması bekleniyor. Sel, su baskını, yıldırım, dolu yağışı ve kuvvetli rüzgar gibi olumsuzluklara karşı dikkatli olunması gerekmektedir.
        </div>
    </div>
  )
}

export default HaberCard