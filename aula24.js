let valor = function (...valores) {
  let resultado = 0;
  for (let i of valores) {
    resultado += i;
  }
  return resultado;
};

console.log(valor(15, 10, 5, 1, 2, 4));

const f = new Function("v1", "v2", "v3", "return v1+v2+v3");

console.log(f(4, 4, 4));
