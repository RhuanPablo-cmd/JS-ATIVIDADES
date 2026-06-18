/*
function* cores() {
  yield "Vermelho";
  yield "Verde";
  yield "Azul";
}

const itc = cores();
console.log(itc.next().value);
console.log(itc.next().value);
console.log(itc.next().value);
*/

/*
function* perguntas() {
  const nome = yield "Qual seu nome?";
  const esporte = yield "Qual seu esporte favorito?";
  return "Seu nome é " + nome + ", seu esporte favorito é " + esporte;
}

const its = perguntas();
console.log(its.next().value)
console.log(its.next("Rhuan").value);
console.log(its.next("Basquete").value);
*/

/*
function* contador() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const its = contador();
for (i = 0; i <= 10; i++) console.log(its.next().value);

*/

function* contador() {
  let i = 0;
  while (true) {
    yield i++;
    if (i > 5) break;
  }
}
const its = contador();
for (let c of its) {
  console.log(c);
}
