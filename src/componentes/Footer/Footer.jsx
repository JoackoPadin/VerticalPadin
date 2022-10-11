import React from 'react';
import '../Footer/Footer.css';
import Facebook from '../Imagenes/facebook-logo.png';
import Instagram from '../Imagenes/instagram.png';
import Whatsapp from '../Imagenes/whatsapp.png';


const Footer = () => {
  return (
    <div className='container-fluid footer'>
      <div>
        <h5>© 2022 Copyrigh JPS-DEVS</h5>
      </div>
      <div className='container text-end'>
        <div className='row'>
          <div className='col'>
            <img src={Facebook}  className='columna' width="35" height="35" alt="Facebook" />
            <img src={Instagram} className='columna' width="35" height="35" alt="Instagram" />
            <img src={Whatsapp} className='columna' width="35" height="35" alt="Whatsapp" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
