// Funcion que crea un array a partir de una cadena, usando el espacio en blanco como separador.
function obtenerArray(cadena) {
    return cadena.split(' ');
}

// FUncion que muestra el array.
function muestraArray(array) {
    // Mediante la propiedad length, se muestra cuantas palabras hay en el array.
    document.write('Hay ' + array.length + ' palabras<br>');
    // Muestra la primera palabra.
    document.write('La primera palabra es ' + array[0] + '<br>');
    // Muestra la última palabra.
    document.write('La última palabra es ' + array[array.length - 1] + '<br>');
    // Variable que va a guardar las palabras en orden inverso.
    let ordenInverso = '';
    // Mediante un bucle for invertido, se guardan las palabras en orden inverso en la variable anterior.
    for (let i = array.length - 1; i >= 0; i--) {
        ordenInverso = ordenInverso + ' ' + array[i];
    }
    // Muestra la variable con las palabras invertidas.
    document.write(ordenInverso + '<br>');

    // Bucle que ordena las palabras de la a a la z
    // SE recorre el array una vez.
    for (let i = 0; i < array.length - 1; i++) {
        // Y se vuelve a recorre dentro, empesando desde la posicion i + 1;
        for (let j = i + 1; j <= array.length; j++) {
            // Se compara la palabra actual con las siguientes a la misma.
            if (array[i].localeCompare(array[j]) == 1) {
                // Si segun localecompare, alfabeticamente van antes, se intercambian.
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
        // Al final el array tiene las palabras ordenadas alfabeticamente.
    }
    // Por ultimo se muestran en orden alfabetico.
    for (let i = 0; i < array.length; i++) {
        document.write(array[i] + ' ');
    }
    document.write('<br>');
    // Y luego se muestran en orden inverso.
    for (let i = array.length - 1; i >= 0; i--) {
        document.write(array[i] + ' ');
    }
}

let array = obtenerArray('hola me llamo pedro');
muestraArray(array);
