import { useNavigate } from "react-router-dom"
import "./404Page.css"
const ErrorPage = () => {
    const navigate = useNavigate();

    const returnHandler = () => {
        navigate("/mainpage")
    }
  return (
    <div className="error-page">
        <h1>404</h1>
        <h2>sayfa Bulunamadı!</h2>
        <button className="geri-dön" onClick={returnHandler}>Geri Dön</button>

    </div>
  )
}

export default ErrorPage