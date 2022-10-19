// Se le pide al usuario el número de filas y columnas para crear el tablero.
let filas = parseInt(prompt('Introduce las filas del tablero.'));
let columnas = parseInt(prompt('Introduce las columnas del tablero.'));
// Si lo introducido no coincide con las condiciones válidas, se piden de nuevo.
while ((filas < 2) | (columnas < 2) | (filas > 20) | (columnas > 20)) {
    alert('Has introducido parámetros inválidos, intentalo de nuevo.');
    filas = parseInt(prompt('Introduce las filas del tablero.'));
    columnas = parseInt(prompt('Introduce las columnas del tablero.'));
}

// Funcion que, dadas las filas y las columnas, se le pasa un array y lo rellena de 0.
function rellenarTablero(array, filas, columnas) {
    if (isNaN(filas) | isNaN(columnas) | (typeof array != Object)) {
        return false;
    } else {
        for (let i = 0; i < filas; i++) {
            for (let j = 0; j < columnas; j++) {
                tablero[i][j] = 0;
            }
        }
        return tablero;
    }
}

let minas = parseInt(prompt('Introduce las minas del tablero.'));
while ((minas < 1) | (minas > (filas * columnas) / 2)) {
    alert('Has introducido parámetros inválidos, intentalo de nuevo.');
    minas = parseInt(prompt('Introduce las minas del tablero.'));
}
