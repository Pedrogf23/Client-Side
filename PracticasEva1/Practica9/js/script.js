// Constantes que almacenan los valores permitidos.
const minus = 'aáàbcçdeéèfghiìíjklmnñoóòpqrstuùúüvwxyz';
const mayus = 'AÁÀBCÇDEÉÈFGHIÍÌJKLMNÑOÓÒPQRSTUÚÙÜVWXYZ';
const nums = '0123456789';
const otros = '!@#$%&?¿¡<> ;,:.*+-_';

// Comprobación del nombre de usuario.
let isUser = true;
do {
  var user = prompt('Introduzca el nombre de usuario:');

  // Si cancela el prompt, se termina el programa.
  if (user === null) {
    alert('Ha cancelado la operación');
  }

  // Comprueba que cada caracter presente en 'user' sea una letra minúscula o un número.
  for (let i = 0; i < user.length; i++) {
    if (!minus.includes(user.charAt(i))) {
      if (!nums.includes(user.charAt(i))) {
        isUser = false;
      }
    }
  }

  // Le dice al usuario si el nombre es correcto o no.
  if (isUser == false) {
    alert('Nombre de usuario inválido.');
  } else {
    alert("Usuario '" + user + "' es correcto.");
  }

  // Mientras que el nombre de usuario no sea correcto, repite el proceso anterior.
} while (isUser == false);

// Comprobación de la contraseña.
let isPasswd = true;
do {
  var passwd = prompt('Introduzca la contraseña:');

  // Si cancela el prompt, se termina el programa.
  if (passwd === null) {
    alert('Ha cancelado la operación');
  }

  // Variables que cuentan cúantos caracteres de cada tipo permitido hay presentes en la contraseña.
  let numsPasswd = 0;
  let minusPasswd = 0;
  let mayusPasswd = 0;
  let otrosPasswd = 0;

  // Comprueba que cada caracter presente en 'passwd' sea un caracter válido.
  // Si el caracter es válido, se suma uno al tipo de caracter que sea.
  for (let i = 0; i < passwd.length; i++) {
    if (!minus.includes(passwd.charAt(i))) {
      if (!mayus.includes(passwd.charAt(i))) {
        if (!nums.includes(passwd.charAt(i))) {
          if (!otros.includes(passwd.charAt(i))) {
            isPasswd = false;
          } else {
            otrosPasswd++;
          }
        } else {
          numsPasswd++;
        }
      } else {
        mayusPasswd++;
      }
    } else {
      minusPasswd++;
    }
  }

  // Si en la contraseña falta algún tipo de caracter, la contraseña es inválida.
  if (minusPasswd == 0 || mayusPasswd == 0 || numsPasswd == 0 || otrosPasswd == 0) {
    isPasswd = false;
  }

  // Le dice al usuario si la contraseña es correcta o no.
  if (isPasswd == false) {
    alert('Contraseña inválida.');
  } else {
    alert('Contraseña correcta.');
  }

  // Mientras que la contraseña sea inválida, repite todo el proceso anterior.
} while (isPasswd == false);
