// $$ => And ou E
// || => Or ou Ou
// ! => Not ou Não

let n1 = 60,
  n2 = 50,
  n3 = 15,
  n4 = 2;

console.log(n1 > n2 && n2 > n3);
console.log(n1 > n2 || n2 > n3);
console.log(!(n1 > n2) || n2 > n3);

if (n1 > n2 && n1 > n3) {
  console.log(n1 + " é maior que " + n2 + " e " + n3);
} else if (n2 > n1 && n2 > n3) {
  console.log(n2 + " é o maior");
} else {
  console.log(n3 + " é maior");
}
