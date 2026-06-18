function canal() {
  let n1 = 10;
  let n2 = 2;
  let res = n1 * n2;
  if (res % 2 == 0) return "Par";
  else return "Impar";

  return res;
}

let num = canal();
console.log(num);
canal();
canal();
canal();

/*
function enviar() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let res = Number(n1) + Number(n2);

  let resul = document.getElementById("idres");

  resul.innerHTML = "Resultado: " + n1 + " + " + n2 + " = " + res

}*/
