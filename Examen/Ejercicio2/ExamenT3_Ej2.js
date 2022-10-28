function esPalindromo(cadena) {
    // Esta variable almacenará la cadena dada la vuelta.
    let cadenaRevertida = '';

    // Primero se le quitan los espacios al principio y al final.
    cadena.trim();

    // Se pasa toda la cadena a minúsculas.
    cadena = cadena.toLowerCase();

    // Se le quitan los espacios de en medio de la cadena.
    // Primero se separa la cadena en un array que guarda cada cadena que encuentre separada por " ".
    let arrayCadena = cadena.split(' ');
    // Se deja la variable original vacía.
    cadena = '';
    // Y mediante un bucle que recorra el array de cadenas, se vuelve a juntar todo sin espacios en la variable orginal.
    for (let i = 0; i < arrayCadena.length; i++) {
        cadena = cadena.concat(arrayCadena[i]);
    }

    // Se hace lo mismo que con los espacios pero con las comas.
    arrayCadena = cadena.split(',');
    cadena = '';
    for (let i = 0; i < arrayCadena.length; i++) {
        cadena = cadena.concat(arrayCadena[i]);
    }

    // Se recorre la cadena del revés, cambiando los signos como tildes por su vocal correspondiente.
    for (let i = cadena.length - 1; i >= 0; i--) {
        if (cadena.charAt(i) == 'á') {
            cadena = cadena.replace('á', 'a');
        } else if (cadena.charAt(i) == 'é') {
            cadena = cadena.replace('é', 'e');
        } else if (cadena.charAt(i) == 'í') {
            cadena = cadena.replace('í', 'i');
        } else if (cadena.charAt(i) == 'ó') {
            cadena = cadena.replace('ó', 'o');
        } else if (cadena.charAt(i) == 'ú' || cadena.charAt(i) == 'ü') {
            cadena = cadena.replace('ú', 'u');
            cadena = cadena.replace('ü', 'u');
        }
        // Por último, se van guardando los caracteres en orden inverso en la variable revertida.
        cadenaRevertida = cadenaRevertida.concat(cadena.charAt(i));
    }

    // Si al derecho y al revés son iguales, devuelve true; si no, devuelve false.
    if (cadena == cadenaRevertida) {
        return true;
    } else {
        return false;
    }
}

if (esPalindromo('yo hago yoga, hoy')) {
    alert('Es palindromo');
}
