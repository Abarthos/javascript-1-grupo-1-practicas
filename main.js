
//Ejemplo1
let lista = [1,3,5,7,9,11];
let mayor = 0;

function ejemplo1(a,b) {
    for (let i = 0; i < a.length; i++) {
        if (i == 0) {
            b = a[i];
        }
        if (a[i] > b) {
            b = a[i];
        }
    }
    console.log ("El valor mayor es", b,"\n");
}

//Ejemplo2
let frase = "Hola"
let analizar = "";
let validar = 1;

function ejemplo2(a,b,c) {
    for (let i = 0; i< a.length; i++) {
      
       
    }

    b = b.toLowerCase();
    let d = b.length-1;
    for (let i = 0; i < b.length; i++) {
        if (b[i] != b[d]) {
            c = 0;
        }
        j--;
    }
    if (c == 1) {
        console.log("La frase",a, "Si es palindromo","\n");
    } else {
        console.log("La frase",a,"No es palindromo","\n");
    }
}

//ejemplo3
let matriz = [[1,0,0],[0,1,1],[0,1,0]];
let contador = 0;

function ejemplo3(a,b) {
    for (let i = 0; i< a.length; i++) {
        for (let k = 0; k < a.length; k++) {
            if (a[i][k] == 0) {
                contador++;
            }
        }
    }
    console.log("La cantidad de ceros es:",contador,"\n");
}


//ejemplo5
let largo = 8;
let igual = "";

function ejemplo5(a,b) {
    console.log( "Triangulo de tamaño",a,"\n");
    for (let i = 0; i < a.length; i++) {
        b +- "* ";
        console.log(b); 
    }
    
}

//Ejecuciones

function main() {
    console.log("Respuesta de Ejemplo 1\n");
    ejemplo1(lista,mayor);
    console.log("Respuesta de Ejemplo 2\n");
    ejemplo2(frase,analizar,validar);
    console.log("Respuesta de Ejemplo 3\n");
    ejemplo3(matriz,contador);
    console.log("Respuesta de Ejemplo 5\n");
    ejemplo5(largo,igual);
}
main();
