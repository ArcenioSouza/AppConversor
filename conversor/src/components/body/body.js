import React from "react";
import '../body/body.css';

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
         if(opIn === "Quilômetros" && opFor === "Centimetros"){
          let result = number * 100000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Centimetros"
         }
         if(opIn === "Quilômetros" && opFor === "Milimetros"){
          let result = number * 1000000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Milimetros"
         }

         /* conversões de metros -- para */

         if(opIn === "Metros" && opFor === "Metros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Metros"
         }
         if(opIn === "Metros" && opFor === "Quilômetros"){
          let result = number / 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Quilômetros"
         }
         if(opIn === "Metros" && opFor === "Centimetros"){
          let result = number * 100
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Centimetros"
         }
         if(opIn === "Metros" && opFor === "Milimetros"){
          let result = number * 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Milimetros"
         }

         /* conversões de centimetros -- para */

         if(opIn === "Centimetros" && opFor === "Centimetros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Centimetros"
         }
         if(opIn === "Centimetros" && opFor === "Quilômetros"){
          let result = number / 100000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Quilômetros"
         }
         if(opIn === "Centimetros" && opFor === "Metros"){
          let result = number / 100
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Metros"
         }
         if(opIn === "Centimetros" && opFor === "Milimetros"){
          let result = number * 10
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Milimetros"
         }

         /* conversões de milimetros -- para */

         if(opIn === "Milimetros" && opFor === "Milimetros"){
          document.getElementById('result').innerText =  "O resultado é igual a: "+number+" Milimetros"
         }
         if(opIn === "Milimetros" && opFor === "Quilômetros"){
          let result = number / 1000000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Quilômetros"
         }
         if(opIn === "Milimetros" && opFor === "Metros"){
          let result = number / 1000
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Metros"
         }
         if(opIn === "Milimetros" && opFor === "Centimetros"){
          let result = number * 10
          document.getElementById('result').innerText =  "O resultado é igual a: "+result+" Centimetros"
         }
         
      }
      else{
        alert('Falta informações para realização do cálculo')
      }

  }

  return(
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
              <option id='input-op1'>Selecione uma medida</option>
              <option id='input-op2'>Quilômetros</option>
              <option id='input-op3'>Metros</option>
              <option id='input-op4'>Centimetros</option>
              <option id='input-op5'>Milimetros</option>
            </select>
          </div>
          <br/> 
          <div>
            <label>Para</label>
              <select id='select-for' onChange={onChangeMeasureFor}>
                <option id='input-op2'>Quilômetros</option>
                <option id='input-op3'>Metros</option>
                <option id='input-op4'>Centimetros</option>
                <option id='input-op5'>Milimetros</option>
              </select>
          </div>
          <br/>
          <div>
            <h2 id='result'>Resultado</h2>
          </div>        
        </form>
      </div>
    </div>
  )
}
export default BodyMeasure;