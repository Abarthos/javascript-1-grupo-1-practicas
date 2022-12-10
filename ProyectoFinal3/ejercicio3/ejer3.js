//Ejercicio 3

function sumar() {
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    let resultado = parseFloat(primerNumero) + parseFloat(segundoNumero);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function restar() {
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    let resultado = parseFloat(primerNumero) - parseFloat(segundoNumero);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function multiplicar() {
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    let resultado = parseFloat(primerNumero) * parseFloat(segundoNumero);
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  function dividir() {
    let primerNumero = document.getElementById("primerNumero").value;
    let segundoNumero = document.getElementById("segundoNumero").value;
    let resultado = parseFloat(primerNumero) / parseFloat(segundoNumero);
    document.getElementById("resultado").innerHTML = resultado;
  }