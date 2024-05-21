

const TalepYokModal = ({onClose, error}) => {
    return (
        <div className="modal-container">
            <header className="modal-header">
                <h2>{error?.title}</h2>
            </header>
            <section className="modal-section">
                <p>{error?.message}</p>
            </section>
            <footer className="modal-footer">
                <button onClick={onClose} className="tamam">Tamam</button>
            </footer>
        </div>
      )
}

export default TalepYokModal