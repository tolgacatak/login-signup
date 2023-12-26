import React from 'react'
import './Hakkimizda.css'
import NavbarGiris from '../Navbar/NavbarGiris'
import Footer from './Footer'
const Hakkimizda = () => {
  return (
    <>
    <NavbarGiris/>
    <div className="hakkimizda-container">
        <div className="hakkimizda-title">
            <h1>Hakkımızda</h1>
        </div>
        <div className="hakkimizda-content">
            <p>Lorem ipsum dolor sit amet con
                sectetur adipisicing elit. 
                Voluptates, voluptatum.
            </p>
        </div>
    </div>
    <Footer/> 
    </>
    
  )
}

export default Hakkimizda