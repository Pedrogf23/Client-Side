let minas = parseInt(prompt('Introduce las minas del tablero.'));
while ((minas < 1) | (minas > (filas * columnas) / 2)) {
    alert('Has introducido parámetros inválidos, intentalo de nuevo.');
    minas = parseInt(prompt('Introduce las minas del tablero.'));
}
