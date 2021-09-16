import React from "react";
import '../body/body.css';

const Body = () => {

  return(
    <div className='body-container'>
      <div className='body-title'>
        <h1>Conversor de <span id='type-converter'>Medidas</span></h1>
      </div>
      <div className='body-form'>
        <form className='form-wrapper'>
          <div>
            <label>De</label>
            <input id='input-text1' placeholder='Digite o valor'></input>
            <select>
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
              <select>
                <option id='input-op1'>Selecione uma medida</option>
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
export default Body;