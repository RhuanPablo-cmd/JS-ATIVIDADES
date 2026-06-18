const cursosTodos = [...document.getElementsByClassName("curso")];
const cursosc1 = [...document.getElementsByClassName("c1")];
const cursosc2 = [...document.getElementsByClassName("c2")];
const cursoEspecial = document.getElementsByClassName("curso")[0];

console.log(cursosTodos);
console.log(cursosc1);
console.log(cursosc2);

cursosc1.map((el, i) => {
  el.classList.add("destaque");
});

cursosTodos.forEach((el, i) => {
  if (i < 2) {
    el.classList.add("especial");
  }
});

