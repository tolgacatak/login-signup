import './TalepModal.css'
import { Link } from 'react-router-dom'

const TalepModal = ({ onClose }) => {
  return (
    <div className="talep-modal-wrapper">
        <header className="talep-modal-title">
            <h2>Talebinizi;</h2>
        </header>
        <section className="talep-modal-olustur">
            <Link className='talep-modal-olustur-link1' to = "/destek-iste" >
                <button>Oluşturun</button>
            </Link>
        </section>
        <section className="talep-modal-görüntüle">
            <Link className='talep-modal-olustur-link2' to = "/taleplerim" >
                <button>Görüntüleyin</button>
            </Link>
        </section>
        <section className="talep-modal-tamam">
            <button onClick={onClose}>Tamam</button>
        </section>
    </div>
  )
}

export default TalepModal