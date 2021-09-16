import React from "react";
import "../navbar/navbar.css"
import { Link } from 'react-router-dom'

const Navbar = () => {

  return(
    <div className='container'>
      <div className='wrapper-title'>
        <h2><span>App</span>Conversor</h2>
      </div>
      <div className='wrapper-options'>
        <div id='options-title'>
          <h3>Escolha o tipo de conversor</h3>  
        </div>
        <div id='options-list'>
          <ul>
            <Link id='link' to="/BodyMeasure"><li>Distância</li></Link>
            <Link id='link' to="/BodyTemperature"><li>Temperatura</li></Link>
            <Link id='link' to="/BodyCurrency"><li>Moeda</li></Link>            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;