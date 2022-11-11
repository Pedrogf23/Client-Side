function parImpar(num) {
  return num % 2 == 0 ? 'par' : 'impar';
}
function escribirNumsParImpar() {
  for (let i = 0; i < 50; i++) {
    let num = parseInt(Math.random() * 10000 + 1);
    document.write(num + ' es ' + parImpar(num) + '<br>');
  }
}

escribirNumsParImpar();
