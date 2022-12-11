//Juego de la Vida
function juegoDeLaVida(tamanomatriz, celulasvivas, turno) {
  if (tamanomatriz <= 0 || celulasvivas <= 0 || turno <= 0) {
    throw new Error("Los parámetros deben ser mayores a cero");
  }
  if (celulasvivas > tamanomatriz * tamanomatriz) {
    throw new Error("La cantidad de células vivas no puede ser mayor que el tamaño de la matriz");
  }
  let matriz = genMatrizIni(tamanomatriz, celulasvivas);
  console.log("(Inicio)");
  escribMatriz(matriz);

  for (let i = 1; i <= turno; i++) {
    matriz = avanMatriz(matriz);
    console.log(`(Turno ${i})`);
    escribMatriz(matriz);
  }
}

function genMatrizIni(tammatriz, celsvivas) {
  let matriz = [];
  for (let i = 0; i < tammatriz; i++) {
    matriz[i] = [];
    for (let j = 0; j < tammatriz; j++) {
      matriz[i][j] = 0;
    }
  }
  for (let i = 0; i < celsvivas; i++) {
    let x = Math.floor(Math.random() * tammatriz);
    let y = Math.floor(Math.random() * tammatriz);

    matriz[x][y] = 1;
  }
  return matriz;
}

function escribMatriz(matriz) {
  for (let i = 0; i < matriz.length; i++) {
    console.log(matriz[i].join(" "));
  }
  console.log();
}

function avanMatriz(matriz) {
  let nuevaMatriz = [];
  for (let i = 0; i < matriz.length; i++) {
    nuevaMatriz[i] = [];
    for (let j = 0; j < matriz.length; j++) {
      nuevaMatriz[i][j] = 0;
    }
  }
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz.length; j++) {
      let celulasCercanas = obtVecinas(i, j, matriz);
      let estadoActual = matriz[i][j];
      let nuevoEstado = condicJuego(estadoActual, celulasCercanas);

      nuevaMatriz[i][j] = nuevoEstado;
    }
  }
  return nuevaMatriz;
}

function obtVecinas(i, j, matriz) {
  let celvecinas = 0;
  for (
    let x = Math.max(i - 1, 0);
    x <= Math.min(i + 1, matriz.length - 1);
    x++
  ) {
    for (
      let y = Math.max(j - 1, 0);
      y <= Math.min(j + 1, matriz.length - 1);
      y++
    ) {
      if (x != i || y != j) {
        celvecinas += matriz[x][y];
      }
    }
  }
  return celvecinas;
}

function condicJuego(estadoActual, celulasvecinas) {
  if (estadoActual == 0 && celulasvecinas == 3) {
    return 1;
  } else if (estadoActual == 1 && (celulasvecinas < 2 || celulasvecinas > 3)) {
    return 0;
  } else {
    return estadoActual;
  }
}

juegoDeLaVida(10, 50, 15);
