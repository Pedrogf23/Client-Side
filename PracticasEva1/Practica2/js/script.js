let alto = 0;
do {
  alto = prompt('Introduzca el alto de la tabla:');
} while (isNaN(alto));

let ancho = 0;
do {
  ancho = prompt('Introduzca el ancho de la tabla:');
} while (isNaN(ancho));

document.write('<table>');
for (let i = 1; i <= alto; i++) {
  document.write('<tr>');
  for (let j = 1; j <= ancho; j++) {
    document.write('<td>' + i + '-' + j + '</td>');
  }
  document.write('<tr>');
}
document.write('</table>');
