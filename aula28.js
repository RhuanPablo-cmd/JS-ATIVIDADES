/*
const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT"];
cursos.map((el, i) => {
  console.log("Curso: " + el + " - Posição do Curso: " + i);
});

console.log("========================================================");

for (let il = 0; il < cursos.length; il++) {
  console.log("Curso: " + cursos[il] + " - Posição do Curso: " + il);
}

const cursos = ["HTML", "CSS", "JAVASCRIPT", "PHP", "REACT"];
let c = cursos.map((el, i) => {
  return el;
});
console.log(c);
*/

// let el = document.getElementsByTagName("div");
// el = [...el];
// console.log(el)
// el.map((e, i) => {
//     e.innerHTML="CFB Cursos"
//   console.log(e.innerHTML);
// });
// console.log(el);

// const el = document.getElementsByTagName("div");
// const val = Array.prototype.map.call(el, ({ innerHTML }) => innerHTML);

// console.log(val);

const converterInt = (e) => parseInt(e);
const dobrar = (e) => e*2;

let num = ["1", "2", "3", "4", "5"].map(converterInt);
let num2 = ["1", "2", "3", "4", "5"].map(dobrar);
console.log(num);
console.log(num2);
