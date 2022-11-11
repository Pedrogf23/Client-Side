let isDni = false;
let caracteres = 'TRWAGMYFPDXBNJZSQVHLCKE';

do {
  var dni = prompt('Introduzca su DNI:');

  if (dni.length == 9) {
    if (!isNaN(dni.substring(0, 8)) && isNaN(dni.substring(8))) {
      var caracter = dni.substring(0, 8) % 23;

      if (caracteres.charAt(caracter) == dni.substring(8).toUpperCase()) {
        isDni = true;
      }
    }
  } else if (dni == '0') {
    isDni = 'x';
  }

  if (!isDni) {
    alert('DNI no válido.');
    if (!isNaN(caracter)) {
      alert('La letra de su DNI debería ser ' + caracteres.charAt(caracter));
    }
  }
} while (isDni == false);

if (isDni == true) {
  alert('Su dni (' + dni + ') es válido.');
}
