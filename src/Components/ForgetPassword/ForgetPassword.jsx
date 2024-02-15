import React from 'react'
import './ForgetPassword.css'
import { Link } from 'react-router-dom'

import gorsel from '../Assets/logo.jpeg'

const ForgetPassword = () => {
  return (
    <div className="container-forget">

      <div className="header-forget">
        <div className="img-forget">
          <img src={gorsel} alt="" />
        </div>
        <div className="text-forget">
          Şifremi Unuttum
        </div>
        <div className="underline-forget"></div>
      </div>
      <div className="inputs-forget">
        <div className="label-forget"><h2>Mail Adresinizi Girin</h2></div>
        <div className="input-forget">
          <input type="text" placeholder="E-mail" />
        </div>
      </div>
      <div className="submit-container-forget">
        <Link to="/codepage" className="submit-forget">
          Gönder
        </Link>

      </div>
    </div>

  )
}
export default ForgetPassword
