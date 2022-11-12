
//Ejercicio 1

//Variables
var user_list = [3,3,6,7,8,9,2,8,4,12,14,20];
var min = 0;
var max = 0;

//Funciones
function stadisticProm(user_list) {
  var i = 0, summ = 0, ArrayLen = user_list.length;
  while (i < ArrayLen) {
      summ = summ + user_list[i++];
}
  return summ / ArrayLen;
  
}
var a = stadisticProm(user_list);
console.log("El promedio de los numeros es:",a); 

function stadisticMed(user_list) {
  if (user_list.length % 2 == 0) {
    var mitad = user_list.length / 2;
    console.log("La mediana de los numeros es:", ((user_list[mitad] + user_list[mitad - 1]) / 2));
  } else {
    console.log("La mediana de los numeros es:", (user_list[(user_list.length - 1) / 2]));
  }
}

function stadisticMinMax(user_list, max, min) {
  for (let i = 0; i < user_list.length; i++) {
    if (i == 0) {
      min = user_list[i];
      max = user_list[i];
    } else {
      if (user_list[i] > min) {
        min = user_list[i];
      }
      else if (user_list[i] < max) {
        max = user_list[i];
      }
    }
  }
  console.log("El valor minimo entre los numeros es:", max);
  console.log("El valor maximo entre los numeros es:", min);
}

// Llamado de funciones

function main() {
  stadisticProm(user_list);
  stadisticMed(user_list);
  stadisticMinMax(user_list, max, min);
}
main();
