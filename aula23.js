function soma(...valores) {
  let tam = valores.length;
  let res = 0;
  for (let t = 0; t < valores.length; t++) {
    res += valores[t];
  }
  return res;
}

console.log(soma(10, 5, 3, 5, 6));

function somador(...valorS) {
  let total = valorS.length;
  let resultado = 0;
  for (let i = 0; i < valorS.length; i++) {
    resultado += valorS[i];
  }
  return resultado;
}

console.log(somador(2, 3, 4, 5, 6, 4));


function somador(...valorS) {
  let total = valorS.length;
  let resultado = 0;
  for (i of valorS) {
    resultado += i;
  }
  return resultado;
}

console.log(somador(2, 3, 4, 5, 6, 4));

