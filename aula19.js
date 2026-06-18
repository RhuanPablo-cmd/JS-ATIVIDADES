/*
let num = 3;

switch (num) {
  case 1:
    console.log("Errou");
    break;
  case 2:
    console.log("Errou");
    break;
  case 3:
    console.log("Acertou");
    continue;
  case 4:
    console.log("Errou");
    break;
}

let n = 0;
let max = 1000;

while (n < max) {
  console.log("=> " + n);
  if (n > 10) {
    break;
  }
  n++;
}

console.log("Fim do codigo");
*/

let nu = 0;
let max = 1000;
let par = 0;
let parTol = 0;

for (let i = nu; i < max; i++) {
  console.log("O total => " + i);
  if (i % 2 != 0) {
    continue;
  } parTol++

  /*else {
    par = i;
    parTol++;
    console.log("Os valore: " + par + " é par!!!");
  }*/
}

console.log("Quantidade de numéros pares " + parTol);
console.log("Fim do codigo");
