import './BulunamadiModal.css'

const BulunamadiModal = ({ onClose }) => {
   
  return (
    <div className="bulunamadi-wrapper">
        <header>
            <h2>Aradığınız;</h2>
        </header>
        <section>
            <h2>Kelime bulunamadı.</h2>
        </section>
        <footer>
            <button onClick={onClose}>Tamam</button>
        </footer>
    </div>
  )
}

export default BulunamadiModal