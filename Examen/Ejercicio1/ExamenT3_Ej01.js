function toCani(cadena) {
    // Se recorre la cadena caracter a caracter, cambiando una letra de minuscula a mayuscula cada 2 posiciones.
    for (let i = 0; i < cadena.length; i += 2) {
        cadena = cadena.replace(
            cadena.charAt(i),
            cadena.charAt(i).toUpperCase()
        );
    }
    // Se reemplazan las c por k.
    cadena = cadena.replace('c', 'k');
    cadena = cadena.replace('C', 'K');
    // Si la cadena acaba en vocal, se le añaden 3 H al final.
    if (
        cadena.endsWith('a') ||
        cadena.endsWith('A') ||
        cadena.endsWith('e') ||
        cadena.endsWith('E') ||
        cadena.endsWith('i') ||
        cadena.endsWith('I') ||
        cadena.endsWith('o') ||
        cadena.endsWith('O') ||
        cadena.endsWith('u') ||
        cadena.endsWith('U')
    ) {
        cadena = cadena.concat('HHH');
    }

    // Finalmente, se devuelve la cadena modificada.
    return cadena;
}

alert(toCani('una cadena cani es como esta'));
