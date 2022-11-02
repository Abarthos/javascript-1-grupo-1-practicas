// Variables

// Ejemplo 1
let n1 = 5;
let f1 = 1;

// Ejemplo 2
let n2 = 5;

// Ejemplo 3
let n3 = 18;

//Funciones
function e1(a,b) {
  if (a == 0) {
    console.log("el factorial de",a,"es",1);
  }else{
    for (let i = 2; i <= a; i++) {
      b *= i;
    }
    console.log("El factorial de",a,"es",b,"\n");
  }
}
function e2(a) {
  if (a == 0 ) {
    return 1;
  }
  return a*e2(a-1);
}
function e3(a) {
  if ( (a & 1) == 0) {
    console.log("El numero",a,"es PAR");
  }else{
    console.log("El numero",a,"es IMPAR");
  }
}

//Ejecucion de Funciones
function main() {
  console.log("Respuesta Ejercicio #1\n");
  e1(n1,f1);
  console.log("Respuesta Ejercicio #2\n");
  console.log(e2(n2));
  console.log("Respuesta Ejercicio #3\n");
  e3(n3);
}
main();

