//Variables
//ejer2 y ejer3
var N = 10;
var M = 4;
// ejer4
let array = [2,3,3,6];

//Funciones
//Ejercicio 1
  function ejer1(){
    for (let i = 1; i <= 10; i++) {
      let angulo = "";
      for (let j = 1; j <= 10; j++) {
        if (i >= j) {
          angulo += "*";
        } else {
          angulo += "#";
        }
      }
      console.log(angulo);
    }
  }

//Ejercicio 2
  function ejer2(N,M) {
    let resultado = Math.pow(N,M);
    return resultado;
  }

//Ejercicio 3
  function ejer3(N,M){
    if (M == 0){
        return 1;
    }
    else {
        return N * ejer3(N,M-1);
    }
  }
  
//Ejercicio 4
  function ejer4(array) {
    if (array.length === 0) {
      return 0;
    }
    return array[0] + ejer4(array.slice(1));
  }
  
// LLamado de Funciones
  function proyectoFinal2 (){
    console.log("La respuesta del ejercicio 1 es:");
    ejer1();
    console.log("");
    console.log("La respuesta del ejercicio 2 es:",ejer2(N,M),"\n");
    console.log("La respuesta del ejercicio 3 es:",ejer3(N,M-1),"\n");
    console.log("La respuesta del ejercicio 4 es:",ejer4(array),"\n");
  }
  proyectoFinal2();