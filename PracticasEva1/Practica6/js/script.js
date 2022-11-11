let jugar = true;
do {
  let num = parseInt(Math.random() * 100 + 1);
  let numUser = 0;
  let intentos = 0;
  do {
    do {
      numUser = parseInt(prompt('Adivina un número entre 1 y 100:'));
    } while (numUser < 1 || numUser > 100);

    if (numUser < num) {
      alert('Mi número es mayor que ' + numUser);
    } else if (numUser > num) {
      alert('Mi número es menor que ' + numUser);
    }
    intentos++;
  } while (num != numUser && numUser);

  if (num == numUser) {
    alert('Enhorabuena, el número era ' + numUser + ', ha necesitado ' + intentos + ' intentos.');
  } else {
    alert('Ha salido del juego, el número era ' + num);
  }

  jugar = confirm('¿Quiere jugar de nuevo?');
} while (jugar);
