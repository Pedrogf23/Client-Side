// Se le pide al usuario el número de filas y columnas para crear el tablero.
let filasUser = parseInt(prompt('Introduce las filas del tablero.'));
let columnasUser = parseInt(prompt('Introduce las columnas del tablero.'));
// Si lo introducido no coincide con las condiciones válidas, se piden de nuevo.
while (
    (filasUser < 2) |
    (columnasUser < 2) |
    (filasUser > 20) |
    (columnasUser > 20)
) {
    alert('Has introducido parámetros inválidos, intentalo de nuevo.');
    filasUser = parseInt(prompt('Introduce las filas del tablero.'));
    columnasUser = parseInt(prompt('Introduce las columnas del tablero.'));
}

// Funcion que, dadas las filas y las columnas, se le pasa un array y lo rellena de 0.
function rellenarTablero(filas, columnas) {
    tablero = [[]];
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            tablero[i][j] = 0;
        }
    }
    return tablero;
}

let tablero = rellenarTablero(filasUser, columnasUser);

for (let i = 0; i < filasUser; i++) {
    document.write('<br>');
    for (let j = 0; j < columnasUser; j++) {
        document.write(tablero[i][j]);
    }
}

// let minas = parseInt(prompt('Introduce las minas del tablero.'));
// while ((minas < 1) | (minas > (filas * columnas) / 2)) {
//     alert('Has introducido parámetros inválidos, intentalo de nuevo.');
//     minas = parseInt(prompt('Introduce las minas del tablero.'));
// }
