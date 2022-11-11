// Funcion que pide al usuario y valida el número de filas.
function getN_filas() {
  let filas = 0;
  do {
    filas = parseInt(prompt('Introduce las filas del tablero.'));
  } while (filas < 2 || filas > 20);
  return filas;
}

// Funcion que pide al usuario y valida el número de columnas.
function getN_columnas() {
  let columnas = 0;
  do {
    columnas = parseInt(prompt('Introduce las columnas del tablero.'));
  } while (columnas < 2 || columnas > 20);
  return columnas;
}

// Funcion que, dadas filas y columnas, crea el array de arrays inicial, que representará el tablero.
function iniciaTablero(filas, columnas) {
  // Array principal.
  let tableroArray = [];

  // Recorremos el array principal.
  for (let f = 0; f < filas; f++) {
    // En cada valor del array principal guardamos otro array, asi obtenemos un array bidimensional.
    tableroArray[f] = [];
    // Recorremos el array bidimensional.
    for (let c = 0; c < columnas; c++) {
      // En cada valor del array bidimensional, almacenamos un 0.
      tableroArray[f][c] = 0;
    }
  }

  // Al final devolvemos el array bidimensional relleno de 0, con tantos
  // valores como filas y columnas se hayan enviado como parámetros.
  return tableroArray;
}

// Funcion que pide al usuario y valida el número de minas.
function getN_minas(nFilas, nColumnas) {
  let minas = 0;
  do {
    minas = parseInt(prompt('Introduce las minas del tablero.'));
  } while (minas < (nFilas * nColumnas) / 3 || minas > ((nFilas * nColumnas) / 3) * 2);
  return minas;
}

// Funcion que coloca las minas en el tablero de forma aleatoria.
function colocaMinas(tablero, minas) {
  // Variables que almacenarán coordenadas x e y aleatorias.
  let x = 0;
  let y = 0;
  for (let i = 0; i < minas; i++) {
    // Se generarán coordenadas nuevas siempre que en las actuales ya haya una mina.
    do {
      x = parseInt(Math.random() * tablero.length); // tablero.length representa la cantidad de filas que contiene el array.
      y = parseInt(Math.random() * tablero[0].length); // tablero[0].length representa la cantidad de columnas que contiene el array.
    } while (tablero[x][y] == 'MINA');
    // Cuando no haya mina, en esas coordenadas se colocará una.
    tablero[x][y] = 'MINA';
  }
}

// Funcion que cuenta el número de minas que haya alrededor de una casilla.
function nMinasPos(tablero, fila, columna) {
  // La variable numMinas contará las minas que encuentre alrededor
  // de la casilla que se ha introducido por parámetro.
  let numMinas = 0;

  // Se recorren las filas contiguas a la recibida por parámetro.
  for (let zFila = fila - 1; zFila <= fila + 1; zFila++) {
    // Se recorren las columnas contiguas a la recibida por parámetro.
    for (let zColumna = columna - 1; zColumna <= columna + 1; zColumna++) {
      if (zFila > -1 && zColumna > -1 && zFila < tablero.length && zColumna < tablero[0].length) {
        // Entonces, si en esa casilla hay una mina.
        if (tablero[zFila][zColumna] == 'MINA') {
          numMinas++;
        }
      }
    }
  }

  // Se devuelve el número de minas encontradas.
  return numMinas;
}

// Funcion que rellena el tablero colocando en cada casilla las minas que hay alrededor.
function colocaRelleno(tablero) {
  // Se recorre el tablero entero, casilla a casilla.
  for (let fila = 0; fila < tablero.length; fila++) {
    for (let columna = 0; columna < tablero[0].length; columna++) {
      // Si la casilla actual NO tiene mina.
      if (tablero[fila][columna] != 'MINA') {
        // Se guarda en dicha casilla el número de minas que tenga alrededor.
        tablero[fila][columna] = nMinasPos(tablero, fila, columna);
      }
    }
  }
}

// Funcion que dado el tablero ya relleno completamente, lo muestra por pantalla.
function dibujaTablero(tablero) {
  // Recogemos el elemento del html que almacenará el tablero.
  let tableroDiv = document.getElementById('tablero');
  // Cambiamos el valor de las variables en css.
  document.querySelector('html').style.setProperty('--num-filas', tablero.length);
  document.querySelector('html').style.setProperty('--num-columnas', tablero[0].length);
  // El tema del css está sacado de un ejemplo en internet, hecho para que el tablero
  // quede mejor visualmente en pantalla.

  // Se recorren las filas del tablero.
  for (let fila = 0; fila < tablero.length; fila++) {
    // Dentro de cada fila, se recorren las columnas.
    for (let columna = 0; columna < tablero[0].length; columna++) {
      // Si en la casilla hay una mina, dibuja un div con un emoticono dentro.
      if (tablero[fila][columna] == 'MINA') {
        tableroDiv.innerHTML += `<div>\u{1F4A3}</div>`;
        // Si hay un 0, dibuja un div vacío.
      } else if (tablero[fila][columna] == 0) {
        tableroDiv.innerHTML += `<div></div>`;
        // Y si no, dibuja un div con el contenido de la casilla correspondiente.
      } else {
        tableroDiv.innerHTML += `<div>${tablero[fila][columna]}</div>`;
      }
    }
  }
}

// Función que gestiona los datos iniciales y llama a las demás funciones.
function buscaminas() {
  // Primero, se inicializa el tablero, usando las funciones para pedir filas y columnas como parámetros.
  let tablero = iniciaTablero(getN_filas(), getN_columnas());

  // Posteriormente, con el tablero ya inicializado, se colocan en él las minas,
  // usando la funcion para pedir minas como parámetro.
  colocaMinas(tablero, getN_minas(tablero.length, tablero[0].length));

  // Una vez las tenemos el tablero con las minas, hay que rellenar
  // las casillas con el número de minas que tenga alrededor.
  colocaRelleno(tablero);

  // Una vez ya tenemos el array totalmente relleno, lo mostramos por pantalla.
  dibujaTablero(tablero);
}
