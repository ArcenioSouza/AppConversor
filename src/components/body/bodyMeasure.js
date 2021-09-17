import React from "react";
import '../body/body.css';
import Navbar from '../../components/navbar/navbar'

const BodyMeasure = () => {

  const onChangeMeasureFor = () => {
      let opIn = document.querySelector('#select-in').value
      let opFor = document.querySelector('#select-for').value
      let number = document.querySelector('#input-text1').value

      if(number !== "" && opIn !== "Selecione uma medida" && opFor !== "Selecione uma medida") {
        /* conversões de quilômetros -- para */
         if(opIn === "Quilômetros" && opFor === "Quilômetros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Quilômetros"
         }
         if(opIn === "Quilômetros" && opFor === "Metros"){
          let result = number * 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Metros"
         }
         if(opIn === "Quilômetros" && opFor === "Centímetros"){
          let result = number * 100000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Centímetros"
         }
         if(opIn === "Quilômetros" && opFor === "Milímetros"){
          let result = number * 1000000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Milímetros"
         }

         /* conversões de metros -- para */

         if(opIn === "Metros" && opFor === "Metros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Metros"
         }
         if(opIn === "Metros" && opFor === "Quilômetros"){
          let result = number / 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Quilômetros"
         }
         if(opIn === "Metros" && opFor === "Centímetros"){
          let result = number * 100
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Centímetros"
         }
         if(opIn === "Metros" && opFor === "Milímetros"){
          let result = number * 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Milímetros"
         }

         /* conversões de centimetros -- para */

         if(opIn === "Centímetros" && opFor === "Centímetros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Centímetros"
         }
         if(opIn === "Centímetros" && opFor === "Quilômetros"){
          let result = number / 100000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Quilômetros"
         }
         if(opIn === "Centímetros" && opFor === "Metros"){
          let result = number / 100
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Metros"
         }
         if(opIn === "Centímetros" && opFor === "Milímetros"){
          let result = number * 10
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Milímetros"
         }

         /* conversões de Milímetros -- para */

         if(opIn === "Milímetros" && opFor === "Milímetros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Milímetros"
         }
         if(opIn === "Milímetros" && opFor === "Quilômetros"){
          let result = number / 1000000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Quilômetros"
         }
         if(opIn === "Milímetros" && opFor === "Metros"){
          let result = number / 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Metros"
         }
         if(opIn === "Milímetros" && opFor === "Centímetros"){
          let result = number * 10
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Centímetros"
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
        <h1>Conversor de <span id='type-converter'>Distâncias</span></h1>
      </div>
      <div className='body-form'>
        <form className='form-wrapper'>
          <div>
            <label>De</label>
            <input type='number' id='input-text1' placeholder='Digite o valor'></input>
            <select id='select-in' onChange={onChangeMeasureFor}>
              <option>Selecione uma medida</option>
              <option>Quilômetros</option>
              <option>Metros</option>
              <option>Centímetros</option>
              <option>Milímetros</option>
            </select>
          </div>
          <br/> 
          <div>
            <label>Para</label>
              <select id='select-for' onChange={onChangeMeasureFor}>
                <option>Quilômetros</option>
                <option>Metros</option>
                <option>Centímetros</option>
                <option>Milímetros</option>
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
export default BodyMeasure;