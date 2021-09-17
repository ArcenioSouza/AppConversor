import React from "react";
import '../body/body.css';
import Navbar from '../../components/navbar/navbar'

const BodyTemperature = () => {

  const onChangeMeasureFor = () => {
      let opIn = document.querySelector('#select-in').value
      let opFor = document.querySelector('#select-for').value
      let number = document.querySelector('#input-text1').value

      /* de celsius -- para */
      if(number !== "" && opIn !== "Selecione uma medida") {

        if(opIn === "Celsius" && opFor === "Celsius"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" °C"
         }
         if(opIn === "Celsius" && opFor === "Fahrenheit"){
          let result = ((number * 9)/5)+32
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" °F"
         }

         if(opIn === "Celsius" && opFor === "Kelvin"){
          let result = parseFloat(number) + parseFloat(273.15)
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" °K"
         }

         /* de fahreinheit -- para */

        if(opIn === "Fahrenheit" && opFor === "Celsius"){
          let result = ((parseFloat(number) - 32)*5)/9
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" °C"
         }
         if(opIn === "Fahrenheit" && opFor === "Fahrenheit"){          
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" °F"
         }

         if(opIn === "Fahrenheit" && opFor === "Kelvin"){
          let result = ((parseFloat(number) + parseFloat(459.67))*5)/9
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" °K"
         }

         /* de kelvin -- para */

        if(opIn === "Kelvin" && opFor === "Celsius"){
          let result = parseFloat(number) - parseFloat(273.15)
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" °C"
         }
         if(opIn === "Kelvin" && opFor === "Fahrenheit"){          
          let result = ((parseFloat(number)*9)/5) - parseFloat(459.67)
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" °K"
         }

         if(opIn === "Kelvin" && opFor === "Kelvin"){          
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" °K"
         }

      }     
      else{
        alert('Falta informações para realização do cálculo')
      }

  }

  return(
    <>
    <Navbar/>
    <div className='body-container'>
      <div className='body-title'>
        <h1>Conversor de <span id='type-converter'>Temperaturas</span></h1>
      </div>
      <div className='body-form'>
        <form className='form-wrapper'>
          <div>
            <label>De</label>
            <input type='number' id='input-text1' placeholder='Digite o valor'></input>
            <select id='select-in' onChange={onChangeMeasureFor}>
              <option>Selecione uma medida</option>
              <option>Celsius</option>
              <option>Fahrenheit</option>
              <option>Kelvin</option>
            </select>
          </div>
          <br/> 
          <div>
            <label>Para</label>
              <select id='select-for' onChange={onChangeMeasureFor}>
              <option>Celsius</option>
              <option>Fahrenheit</option>
              <option>Kelvin</option>
              </select>
          </div>
          <br/>
          <div>
            <h2 id='result'>Resultado</h2>
          </div>        
        </form>
      </div>
    </div>
    </>
  )
}

export default BodyTemperature;