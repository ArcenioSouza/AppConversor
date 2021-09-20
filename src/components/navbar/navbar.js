import React from "react";
import "../navbar/navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {

  const activeDist = () => {
    const distancia = document.getElementById('distancia')
    const temperatura = document.getElementById('temperatura')
    const moeda = document.getElementById('moeda')

    distancia.className = 'active'
    temperatura.className = ''
    moeda.className = ''    
  }

  const activeTemp = () => {
    const distancia = document.getElementById('distancia')
    const temperatura = document.getElementById('temperatura')
    const moeda = document.getElementById('moeda')

    distancia.className = ''
    temperatura.className = 'active'
    moeda.className = ''    
  }

  const activeMoeda = () => {
    const distancia = document.getElementById('distancia')
    const temperatura = document.getElementById('temperatura')
    const moeda = document.getElementById('moeda')

    distancia.className = ''
    temperatura.className = ''
    moeda.className = 'active'    
  }

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
            <li id='distancia' className='active' onClick={activeDist}><Link id='link' to="/">Distância</Link></li>
            <li id='temperatura' onClick={activeTemp}><Link id='link' to="/Temperature">Temperatura</Link></li>
            <li id='moeda' onClick={activeMoeda}><Link id='link' to="/Currency">Moeda</Link></li>            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar;