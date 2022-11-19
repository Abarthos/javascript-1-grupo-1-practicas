// Variables
//eje1
let num = 8;
//eje2
let n2 = 2015;
//eje3
let texto = "Es un Golazooooooo";
let caracter = "O";
//eje4
let secreto = 70;
//eje5
let espacio = "May the force be with you";

//Funciones
//eje1
function ejercicio1(a) {
  if (a == 0) {
    return 1;
  }
  return a*ejercicio1(a - 1);
}

//eje2
function ejercicio2(a) {
  if (((a % 4 == 0) & (a % 100 != 0)) || (a % 400==0)) {
    console.log("El anno",a,"Si es bisiesto\n");
  }else{
    console.log("El anno",a,"No es bisiesto\n");
  }
}

//eje3
function ejercicio3(a,b) {
  let contador = 0;
  a = a.toLowerCase();
  b = b.toLowerCase();
  for (let i = 0; i < a.length; i++) {
    if (a[i] == b) {
      contador ++;
    }
  }
  console.log("El caracter",b,"se repite",contador,"veces en:",a,"\n");
}

//eje4
function ejercicio4(a) {
  let min = 0;
  let max = 100;
  let i = Math.floor(Math.random() * (max - min + 1) + min);
  while (a != i && i != 0) {
    if (i > a) {
    console.log(i,"es mayor que el numero secreto");
    }else {
    console.log(i,"es menor que el numero secreto");
    }
    i = Math.floor(Math.random() * (max - min + 1) + min);
  }
  if (i == 0) {
    console.log("Programa detenido\n");
  }else {
    console.log(i,"Si es el numero secreto\n");
  }
}

//eje5
function ejercicio5(a) {
  let sin_espacio = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] != " ") {
      sin_espacio += a[i];
    }
  }
  console.log("La palabra sin espacios es:",sin_espacio,"\n");
}

function main() {
  console.log("Respuesta del ejercicio 1:");
  console.log("El factorial de",num,"es:",ejercicio1(num),"\n");

  console.log("Respuesta del ejercicio 2:");
  ejercicio2(n2);

  console.log("Respuesta del ejercicio 3:");
  ejercicio3(texto,caracter);

  console.log("Respuesta del ejercicio 4:");
  ejercicio4(secreto);

  console.log("Respuesta del ejercicio 5:");
  ejercicio5(espacio);
}
main();