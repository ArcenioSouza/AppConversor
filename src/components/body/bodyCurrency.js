import React from "react";
import '../body/body.css';

const BodyCurrency = () => {

  const onChangeMeasureFor = () => {

      let opIn = document.querySelector('#select-in').value
      let opFor = document.querySelector('#select-for').value
      let number = document.querySelector('#input-text1').value

      /* de dólar -- para */
      if(number !== "" && opIn !== "Selecione uma moeda") {

        if(opIn === "Dólar" && opFor === "Dólar"){
          document.getElementById('result').innerText =  "O resultado é igual a: US$"+number
         }
         if(opIn === "Dólar" && opFor === "Euro"){
          let euro = 1.18
          let result = parseFloat(number) * parseFloat(euro)
          document.getElementById('result').innerText =  "O resultado é igual a: €"+result
         }

         if(opIn === "Dólar" && opFor === "Reais"){
          let real = 0.19
          let result = parseFloat(number) * parseFloat(real)
          document.getElementById('result').innerText =  "O resultado é igual a: R$"+result
         }

         /* de euro -- para */
         if(opIn === "Euro" && opFor === "Euro"){
          document.getElementById('result').innerText =  "O resultado é igual a: €"+number
         }
         if(opIn === "Euro" && opFor === "Dólar"){
          let dolar = 1.18
          let result = parseFloat(number) * parseFloat(dolar)
          document.getElementById('result').innerText =  "O resultado é igual a: US$"+result
         }

         if(opIn === "Euro" && opFor === "Reais"){
          let real = 6.19
          let result = parseFloat(number) * parseFloat(real)
          document.getElementById('result').innerText =  "O resultado é igual a: R$"+result
         }
        

         /* de reais -- para */
         if(opIn === "Reais" && opFor === "Reais"){
          document.getElementById('result').innerText =  "O resultado é igual a: R$"+number
         }
         if(opIn === "Reais" && opFor === "Dólar"){
           let dolar = 0.19
          let result = parseFloat(number) * parseFloat(dolar)
          document.getElementById('result').innerText =  "O resultado é igual a: US$"+result
         }

         if(opIn === "Reais" && opFor === "Euro"){
           let euro = 0.16
          let result = parseFloat(number) * parseFloat(euro)
          document.getElementById('result').innerText =  "O resultado é igual a: €"+result
         }
        

      }     
      else{
        alert('Falta informações para realização do cálculo')
      }

  }

  return(
    <>
    <div className='body-container'>
      <div className='body-title'>
        <h1>Conversor de <span id='type-converter'>Moedas</span></h1>
      </div>
      <div className='body-form'>
        <form className='form-wrapper'>
          <div>
            <label>De</label>
            <input type='number' id='input-text1' placeholder='Digite o valor'></input>
            <select id='select-in' onChange={onChangeMeasureFor}>
              <option>Selecione uma moeda</option>
              <option>Dólar</option>
              <option>Euro</option>
              <option>Reais</option>
            </select>
          </div>
          <br/> 
          <div>
            <label>Para</label>
              <select id='select-for' onChange={onChangeMeasureFor}>
              <option>Dólar</option>
              <option>Euro</option>
              <option>Reais</option>
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

export default BodyCurrency;