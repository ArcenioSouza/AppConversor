import React from "react";
import "../navbar/navbar.css"

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
            <li>Medidas</li>
            <li>Temperatura</li>
            <li>Moeda</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;