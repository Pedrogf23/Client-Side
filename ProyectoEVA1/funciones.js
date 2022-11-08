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
    let x = 0;
    let y = 0;
    for (let i = 0; i < minas; i++) {
        do {
            // Primero se generan unas coordenadas aleatorias dentro del tablero.
            // Coordenadas en el eje x (fila).
            x = parseInt(Math.random() * tablero.length);
            // Coordenadas en el eje y (columna).
            y = parseInt(Math.random() * tablero[0].length);
            // Las coordenadas se van a generar siempre que se encuentre ya una mina en esa posicion.
        } while ((tablero[x][y] = 'MINA'));
        // Una vez se encuentren unas coordenadas donde no haya minas, se guarda una mina ahí.
        tablero[x][y] = 'MINA';
    }
    // Esto se va a repetir tantas veces como minas se hayan pasado por parámetros.s
}

// Funcion que cuenta el número de minas que haya alrededor de una casilla.
function nMinasPos(tablero, fila, columna) {
    // La variable numMinas contará las minas que encuentre alrededor
    // de la casilla que se ha introducido por parámetro.
    let numMinas = 0;

    // Se recorren las filas contiguas a la recibida por parámetro.
    for (let zFila = fila - 1; zFila < fila + 1; zFila++) {
        // Se recorren las columnas contiguas a la recibida por parámetro.
        for (let zCol = columna - 1; zCol < columna + 1; zCol++) {
            // Se comprueba que la casilla que estamos
            // comprobando se encuentre dentro del tablero.
            if (zFila > -1 && zCol > -1 && zFila < tablero.length && zCol < tablero[0].length) {
                // Si está dentro, comprueba que en esa casilla haya una mina.
                if (tablero[zFila][zCol] == 'MINA') {
                    // Si la hay, aumenta el número de minas;
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
                tablero[fila][columna] = nMinasPos(fila, columna);
            }
        }
    }
}

// Funcion que dado el tablero ya relleno completamente, lo muestra por pantalla.
function dibujaTablero(tableroArray) {
    // Recogemos el elemento del html que almacenará el tablero.
    let tablero = document.getElementById('tablero');
    // Cambiamos el valor de las variables en css.
    document.querySelector('html').style.setProperty('--num-filas', tableroArray.length);
    document.querySelector('html').style.setProperty('--num-columnas', tableroArray[0].length);
    // El tema del css está sacado de un ejemplo en internet, hecho para que el tablero
    // quede mejor visualmente en pantalla.

    // Se recorren las filas del tablero.
    for (let fila = 0; fila < tableroArray.length; fila++) {
        // Dentro de cada fila, se recorren las columnas.
        for (let columna = 0; columna < tableroArray[0].length; columna++) {
            if (tableroArray[fila][columna] == 'MINA') {
                // Si la casilla contiene una mina, imprime un div
                // que contiene un emoticono de bomba.
                tablero.innerHTML += `<div>\u{1F4A3}</div>`;
            } else if (tableroArray[fila][columna] == 0) {
                // Si la casilla contiene un 0, imprime un div vacío.
                tablero.innerHTML += `<div></div>`;
            } else {
                // Si la casilla no contiene ni mina ni 0,
                // imprime un div con el contenido correspondiente del tablero.
                tablero.innerHTML += `<div>${tableroArray[f][c]}</div>`;
            }
        }
    }
}

// Función que gestiona los datos iniciales y llama a las demás funciones.
function buscaminas() {}
