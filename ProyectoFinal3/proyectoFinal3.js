
//Funciones
//Ejercicio 1
function ejer1(cuadrante) {
    let matriz = [];
    for (let i = 0; i < cuadrante; i++) {
      matriz[i] = [];
      for (let j = 0; j < cuadrante; j++) {
        matriz[i][j] = ' ';
      }
    }   
    for (let i = 0; i < cuadrante; i++) {
      for (let j = 0; j < cuadrante; j++) {
        if (i === j || i + j === cuadrante - 1) {
          matriz[i][j] = 'x';
        }
      }
    }
    for (let i = 0; i < cuadrante; i++) {
      console.log(matriz[i].join(' '));
    }
  }
  ejer1(8);
  console.log("\n");
  
  // Ejercicio 2:
  function ejer2(arreglo1, arreglo2) {
    let resultado = true;
    let diferentes = [];
  
    if (arreglo1 === arreglo2) {
      for (let i = 0; i < arreglo1; i++) {
        if (arreglo1[i] !== arreglo2[i]) {
          resultado = false;
          diferentes.push(arreglo1[i]);
        }
      }
    } else {
      resultado = false;
    }
    if (resultado) {
      console.log("Los arreglos son iguales");
    } else {
      console.log(`Los elementos diferentes entre los dos arreglos son: ${diferentes}`);
    }
  }
  let arreglo1 = [7, 4, 2, 8, 3];
  let arreglo2 = [5, 1, 3, 6, 9];
  
  ejer2(arreglo1, arreglo2);
  
  //LLamado de Funciones

  function main (){
    ejer1();
    ejer2();
  }
  main ();