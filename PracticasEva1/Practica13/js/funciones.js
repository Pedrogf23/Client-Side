'use strict';

function pedirDatos(dato) {
    dato = prompt('Introduce las ' + dato + '.');
    return dato;
}

let filas = parseInt(pedirDatos('filas'));

alert(filas);
