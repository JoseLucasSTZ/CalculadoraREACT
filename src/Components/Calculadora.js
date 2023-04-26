import React, { useState } from 'react';

function Calculadora() {



  return (
    <div className="containerA" id="container">
      <div className="containerB screen" id="screen">
        <div className="result" id="subtraction"> 0 </div>
        <div className="result" id="adition"> 0 </div>
        <div className="result" id="division"> 0 </div>
        <div className="result" id="multiplication"> 0 </div>
      </div>
      <div className="containerB">

        <div className="containerC">
          <button className="button" id="7" onClick="getValue(this.value)" value="7">7</button>
          <button className="button" id="8" onClick="getValue(this.value)" value="8">8</button>
          <button className="button" id="9" onClick="getValue(this.value)" value="9">9</button>
          <button className="button" id="4" onClick="getValue(this.value)" value="4">4</button>
          <button className="button" id="5" onClick="getValue(this.value)" value="5">5</button>
          <button className="button" id="6" onClick="getValue(this.value)" value="6">6</button>
          <button className="button" id="1" onClick="getValue(this.value)" value="1">1</button>
          <button className="button" id="2" onClick="getValue(this.value)" value="2">2</button>
          <button className="button" id="3" onClick="getValue(this.value)" value="3">3</button>
          <button className="button" id="0" onClick="getValue(this.value)" value="0">0</button>
          <button className="button" id="," onClick="getValue(this.value)" value=",">,</button>
          <button className="button" id="%" onClick="getOperation(this.value)" value="%">%</button>
        </div>
        <div className="containerC">
          <button className="button" id="/" onClick="getOperation(this.value)" value="/">/</button>
          <button className="button" id="voltar" onClick="getOperation(this.value)" value="back"> ↩</button>
          <button className="button" id="backspace" onClick="getOperation(this.value)" value="backSpacte"> ← </button>
          <button className="button" id="x" onClick="" value="x">x</button>
          <button className="button" id="(" onClick="" value="(">(</button>
          <button className="button" id=")" onClick="" value=")">)</button>
          <button className="button" id="minus" onClick="getOperation(this.value)" value="-">-</button>
          <button className="button" id="x²" onClick="getOperation(this.value)" value="2">x²</button>
          <button className="button" id="raizQuadrada" onClick="getOperation(this.value)" value="raiz">√</button>
          <button className="button" id="plus" onClick="getOperation(this.value)" value="+">+</button>
          <button className="button" id="equals" onClick="getOperation(this.value)" value="=">=</button>
        </div>
      </div>
    </div>

  );
}

export default Calculadora;
