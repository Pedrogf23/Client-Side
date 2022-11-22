// Clase Buscaminas.
function Buscaminas() {
  //ATRIBUTOS

  this.nFilas; // Contendrá el número de filas que tendrá el tablero.
  this.nColumnas; // Contendrá el número de columnas que tendrá el tablero.
  this.tablero; // Contendrá el array que representa el tablero.
  this.nMinas; // Contendrá el número de minas que habrá en el tablero.

  //GETTERS Y SETTERS.

  // Getter del atrubuto nFilas.
  this.getN_Filas = function () {
    // Devuelve el atributo nFilas.
    return this.nFilas;
  };

  // Setter del atrubuto nFilas.
  this.setN_Filas = function () {
    // Pregunta al usuario por el número de filas que desea.
    let filas = 0;
    do {
      filas = parseInt(prompt('Introduce las filas del tablero.'));
      // Valida que el número de filas sea correcto.
    } while (filas < 2 || filas > 20);
    // Guarda el resultado en el atributo nFilas.
    this.nFilas = filas;
  };

  // Getter del atrubuto nColumnas.
  this.getN_Columnas = function () {
    // Devuelve el atributo nColumnas.
    return this.nColumnas;
  };

  // Setter del atributo nColumnas.
  this.setN_Columnas = function () {
    // Pregunta al usuario por el número de columnas que desea.
    let columnas = 0;
    do {
      columnas = parseInt(prompt('Introduce las columnas del tablero.'));
      // Valida que el número de columnas sea correcto.
    } while (columnas < 2 || columnas > 20);
    // Guarda el resultado en el atributo nColumnas.
    this.nColumnas = columnas;
  };

  // Getter del atributo tablero.
  this.getTablero = function () {
    // Devuelve el atributo tablero.
    return this.tablero;
  };

  // Setter del atributo tablero.
  this.setTablero = function () {
    // Guardamos en el atributo 'tablero' un array.
    this.tablero = [];

    // Recorremos el array 'tablero', usando el atributo nFilas como límite.
    for (let f = 0; f < this.getN_Filas(); f++) {
      // En cada valor del array 'tablero' guardamos otro array, asi obtenemos un array bidimensional.
      this.tablero[f] = [];
      // Recorremos la segunda dimensión del array 'tablero', usando el atributo nColumnas como límite.
      for (let c = 0; c < this.getN_Columnas(); c++) {
        // Y en cada valor, almacenamos un 0.
        this.tablero[f][c] = 0;
      }
    }
    // Al final tenemos un array bidimensional de 'x' filas e 'y' columnas almacenado en el atributo 'tablero'.
  };

  // Getter del atrubuto nMinas.
  this.getN_Minas = function () {
    // Devuelve el atributo 'nMinas'.
    return this.nMinas;
  };

  // Setter del atributo nMinas.
  this.setN_Minas = function () {
    // Pregunta al usuario por el número de filas que desea.
    let minas = 0;
    do {
      minas = parseInt(prompt('Introduce las minas del tablero.'));
      // Valida que el número de filas sea correcto.
    } while (minas < (this.getN_Filas() * this.getN_Columnas()) / 3 || minas > ((this.getN_Filas() * this.getN_Columnas()) / 3) * 2);
    // Guarda el resultado en el atributo nMinas.
    this.nMinas = minas;
  };

  // MÉTODOS

  // Método que coloca las minas sobre el tablero.
  this.colocaMinas = function () {
    // Variables que almacenarán coordenadas 'x' e 'y' aleatorias.
    let x = 0;
    let y = 0;
    for (let i = 0; i < this.getN_Minas(); i++) {
      // Se generarán coordenadas nuevas siempre que en las actuales ya haya una mina.
      do {
        x = parseInt(Math.random() * this.getN_Filas()); // La coordenada x no puede ser mayor que el número de filas que tenga el tablero.
        y = parseInt(Math.random() * this.getN_Columnas()); // La coordenada y no puede ser mayor que el número de columnas que tenga el tablero.
      } while (this.getTablero()[x][y] == 'MINA');
      // Cuando no haya mina, en esas coordenadas se colocará una.
      this.getTablero()[x][y] = 'MINA';
    }
  };

  // Método que cuenta el número de minas que haya alrededor de una casilla.
  this.nMinasPos = function (fila, columna) {
    // La variable numMinas contará las minas que encuentre alrededor
    // de la casilla que se ha introducido por parámetro.
    let numMinas = 0;

    // Se recorren las filas contiguas a la recibida por parámetro.
    for (let yFila = fila - 1; yFila <= fila + 1; yFila++) {
      // Se recorren las columnas contiguas a la recibida por parámetro.
      for (let xColumna = columna - 1; xColumna <= columna + 1; xColumna++) {
        // Se comprueba que la casilla que estamos comprobando se encuentre dentro del tablero.
        if (yFila > -1 && xColumna > -1 && yFila < this.getTablero().length && xColumna < this.getTablero()[0].length) {
          // Entonces, si en esa casilla hay una mina.
          if (this.getTablero()[yFila][xColumna] == 'MINA') {
            // Aumenta en 1 el número de minas alrededor.
            numMinas++;
          }
        }
      }
    }
    // Se devuelve el número de minas encontradas.
    return numMinas;
  };

  // Método que rellena el tablero colocando en cada casilla las minas que hay alrededor.
  this.colocaRelleno = function () {
    // Se recorre el tablero entero, casilla a casilla.
    for (let fila = 0; fila < this.getTablero().length; fila++) {
      for (let columna = 0; columna < this.getTablero()[0].length; columna++) {
        // Si la casilla actual NO tiene mina.
        if (this.getTablero()[fila][columna] != 'MINA') {
          // Se guarda en dicha casilla el número de minas que tenga alrededor.
          this.getTablero()[fila][columna] = this.nMinasPos(fila, columna);
        }
      }
    }
  };

  // Métdodo que, con el tablero ya relleno completamente, lo muestra por pantalla.
  this.dibujaTablero = function () {
    // Recogemos el elemento del html que almacenará el tablero.
    let tableroDiv = document.getElementById('tablero');
    // Cambiamos el valor de las variables en css.
    document.querySelector('html').style.setProperty('--num-filas', this.getN_Filas());
    document.querySelector('html').style.setProperty('--num-columnas', this.getN_Columnas());
    // El tema del css está sacado de un ejemplo en internet, hecho para que el tablero
    // quede mejor visualmente en pantalla.

    // Se recorren las filas del tablero.
    for (let fila = 0; fila < this.getN_Filas(); fila++) {
      // Dentro de cada fila, se recorren las columnas.
      for (let columna = 0; columna < this.getN_Columnas(); columna++) {
        // Si en la casilla hay una mina, dibuja un div con un emoticono dentro.
        if (this.getTablero()[fila][columna] == 'MINA') {
          tableroDiv.innerHTML += `<div>\u{1F4A3}</div>`;
          // Si hay un 0, dibuja un div vacío.
        } else if (this.getTablero()[fila][columna] == 0) {
          tableroDiv.innerHTML += `<div></div>`;
          // Y si no, dibuja un div con el contenido de la casilla correspondiente.
        } else {
          tableroDiv.innerHTML += `<div>${this.getTablero()[fila][columna]}</div>`;
        }
      }
    }
  };

  // Método que gestiona los datos iniciales y llama a los demás métodos.
  this.jugar = function () {
    // Se inicializan las filas y las columnas.
    this.setN_Filas();
    this.setN_Columnas();

    // Una vez inicializadas, se crea el tablero.
    this.setTablero();

    // Ahora, se inicializan las minas.
    this.setN_Minas();

    // Con las minas ya inicializadas, se colocan sobre el tablero.
    this.colocaMinas();

    // Una vez tenemos el tablero con las minas, hay que rellenar
    // las casillas con el número de minas que tenga alrededor.
    this.colocaRelleno();

    // Una vez ya tenemos el array totalmente relleno, lo mostramos por pantalla.
    this.dibujaTablero();
  };
}

function crearBuscaminas() {
  let buscaminas = new Buscaminas();
  buscaminas.jugar();
}
