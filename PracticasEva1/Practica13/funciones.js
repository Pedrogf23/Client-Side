// Funcion que que rellena un array bidiemsional de 0, según las filas y columnas que
// indique el usuario.
function generarTableroVacio() {
    // Se le pregunta al usuario por las filas que debe tener el array.
    let filas = parseInt(prompt('Introduce las filas del tablero.'));
    // Si hay menos de 2 filas o más de 20, se le vuelve a preguntar
    // hasta que introduzca un número válido.
    while (filas < 2 || filas > 20) {
        filas = parseInt(prompt('Número inválido, introduce las filas del tablero.'));
    }

    // Se le pregunta al usuario por las columnas que debe tener el array.
    let columnas = parseInt(prompt('Introduce las columnas del tablero.'));
    // Si hay menos de 2 columnas o más de 20, se le vuelve a preguntar
    // hasta que introduzca un número válido.
    while (columnas < 2 || columnas > 20) {
        columnas = parseInt(prompt('Número inválido, introduce las columnas del tablero.'));
    }

    // Array que contendrá el tablero.
    let tablero = [];

    // Se recorre el array.
    for (let f = 0; f < filas; f++) {
        // En cada fila se genera otro array.
        tablero[f] = [];
        // Se recorre el array de dentro de cada fila.
        for (let c = 0; c < columnas; c++) {
            // Y se inicializa el valor a 0.
            tablero[f][c] = 0;
        }
    }

    // Una vez está relleno de 0, se devuelve.
    return tablero;
}

// Función que recibe el tablero y coloca aleatoriamente un número de minas.
function colocarMinas(tablero) {
    // Se le pregunta al usuario por las minas que quiere colocar dentro.
    let numMinas = parseInt(prompt('Introduce las minas del tablero.'));
    // Si hay menos de 2 minas o más de la mitad de casillas totales,
    // se le vuelve a preguntar hasta que introduzca un valor válido.
    while (numMinas < 2 || numMinas >= (tablero.length * tablero[0].length) / 2) {
        numMinas = parseInt(prompt('Número inválido, introduce las minas del tablero.'));
    }

    // Este bucle se repite por cada mina que haya introducido el usuario.
    for (let i = 0; i < numMinas; i++) {
        // Primero se generan de forma aleatoria unas coordenadas x e y.
        // Deberán ser un número entre 0 y el número de filas o columnas que haya.
        let x = parseInt(Math.random() * tablero.length); // tablero.length representa la cantidad de filas que contiene el array.
        let y = parseInt(Math.random() * tablero[0].length); // tablero[0].length representa la cantidad de columnas que contiene el array.
        // Si en esas coordenadas ya hay una mina ('x'), se vuelven a generar coordenadas
        // hasta que encuentre una casilla vacía.
        while (tablero[x][y] == 'x') {
            x = parseInt(Math.random() * tablero.length);
            y = parseInt(Math.random() * tablero[0].length);
        }
        // Una vez las coordenadas apuntan a una casilla vacía, se rellena con una mina ('x').
        tablero[x][y] = 'x';
    }
}

//Funcion que recorre el tablero casilla a casilla y cuenta las minas de alrededor.
function buscarMinas(tablero) {
    // Primero se recorren las filas del tablero.
    for (let fila = 0; fila < tablero.length; fila++) {
        // Por cada fila, se recorren las columnas.
        for (let columna = 0; columna < tablero[0].length; columna++) {
            // Si en la casilla actual no hay mina.
            if (tablero[fila][columna] != 'x') {
                // Se inicializa una variable que ira contando el número de minas que se encuentren.
                let numMinas = 0;
                // Ahora se van a recorrer las 8 casillas de alrededor de la casilla actual.
                // zFila empieza en la fila anterior a la actual y acaba en la siguiente.
                // Esto hace que se recorra entera la fila anterior, la actual y la siguiente.
                for (let zFila = fila - 1; zFila <= fila + 1; zFila++) {
                    // zColumna empieza en la columna anterior a la actual y acaba en la siguiente.
                    // Esto hace que se recorra entera la columna anterior, la actual y la siguiente.
                    // Pero con el límite anterior de las filas, conseguimos que recorran las 8 casillas de
                    // alrededor más la actual.
                    for (let zColumna = columna - 1; zColumna <= columna + 1; zColumna++) {
                        // Ahora hay que comprobar que la casilla que estamos comprobando, esté dentro del tablero.
                        // Es decir, si las filas y las coolumnas que apuntan a la casilla que estamos mirando son mayores que
                        // -1  pero mayores que la cantidad de filas o columnas totales correspondientes.
                        if (zFila > -1 && zColumna > -1 && zFila < tablero.length && zColumna < tablero[0].length) {
                            // Entonces, si en esa casilla hay una mina.
                            if (tablero[zFila][zColumna] == 'x') {
                                // Se suma uno a la variable que cuenta las minas que se encuentran.
                                numMinas++;
                            }
                        }
                    }
                }
                // Una vez recorridas todas las filas de alrededor, se guarda en la casilla correspondiente
                // el número de minas que se han encontrado.
                tablero[fila][columna] = numMinas;
            }
        }
    }
}

// Funcion que dado el tablero ya relleno completamente, lo muestrap por pantalla.
function pintarTablero(tablero) {
    // Recogemos el elemento del html que almacenará el tablero.
    let tablero = document.getElementById('tablero');
    // Cambiamos el valor de las variables en css.
    document.querySelector('html').style.setProperty('--num-filas', tablero.length);
    document.querySelector('html').style.setProperty('--num-columnas', tablero[0].length);
    // El tema del css está sacado de un ejemplo en internet, hecho para que el tablero
    // quede mejor visualmente en pantalla.

    // Se recorren las filas del tablero.
    for (let f = 0; f < tablero.length; f++) {
        // Dentro de cada fila, se recorren las columnas.
        for (let c = 0; c < tablero[0].length; c++) {
            if (tablero[f][c] == 'x') {
                // Si la casilla contiene una mina, imprime un div
                // que contiene un emoticono de bomba.
                tablero.innerHTML += `<div>\u{1F4A3}</div>`;
            } else if (tablero[f][c] == 0) {
                // Si la casilla contiene un 0, imprime un div vacío.
                tablero.innerHTML += `<div></div>`;
            } else {
                // Si la casilla no contiene ni mina ni 0,
                // imprime un div con el contenido correspondiente del tablero.
                tablero.innerHTML += `<div>${tablero[f][c]}</div>`;
            }
        }
    }
}
