function ParImpar(num) {
  this.x = num;

  this.error = function () {
    if (typeof this.x != 'number') {
      return console.log(console.error('Dato erróneo.'));
    } else {
      return console.log('Dato correcto.');
    }
  };

  this.resuelve = function () {
    if (this.x % 2 == 0) {
      alert('Par');
    } else {
      alert('Impar');
    }
  };

  this.es = () => {
    if (this.x % 2 == 0) {
      return 'Par';
    } else {
      return 'Impar';
    }
  };

  this.muestraRandom = function () {
    for (let i = 0; i < 10; i++) {
      this.x = parseInt(Math.random() * 1000 + 1);
      console.log(this.x + ' ' + this.es());
    }
  };
}
