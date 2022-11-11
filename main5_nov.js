//Variables

//Ejemplo 1
var usuario = 2;

//Ejemplo 2
var solicita = 5;
var imprimir = [];

//Ejemplo 3
var string = "Hola";

//Ejemplo 4
var word = "Esta es la entrada";

//Ejemplo 5
var letters = "hola"

//Funciones

function ejemplo1(usuario) {
    if (usuario % 2 == 0 ) {
        console.log("El num es par");
    } else if (usuario % 3 == 0) {
        console.log("El num es divisible entre 3");
    } else if (usuario % 5 == 0) {
        console.log("El num es divisible entre 5");
    } else {
        console.log("El num es impar");
    }
}

function ejemplo2(solicita, imprimir) {
    
}

//Ejecuciones

function main (solicita)
console.log("Respuesta de Ejemplo 1\n");
ejemplo1(solicita);