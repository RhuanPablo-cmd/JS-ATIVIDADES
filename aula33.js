const divTodos = [...document.getElementsByTagName("div")];
const cursosc1 = [...document.getElementsByClassName("c1")];
const cursosc2 = [...document.getElementsByClassName("c2")];
const cursosTodos = document.getElementsByClassName("curso")[6];
const cursoEspecial=document.querySelectorAll("#c1")[0]

console.log(cursoEspecial)

const query_divTodas=[...document.querySelectorAll("div[class]")]
const query_cursosTodos=[...document.querySelectorAll("p, .curso")]
const query_cursosC1=[...document.querySelectorAll(".c1, p")]
const query_cursosC2=[...document.querySelectorAll(".c2")]
const query_cursosp=[...document.querySelectorAll("div > p")]

console.log(query_cursosp)

console.log(query_cursosTodos)
console.log(query_cursosC1)
console.log(query_cursosC2)


console.log(divTodos)
console.log(cursosc1)
console.log(cursosc2)
console.log(cursosTodos)







// console.log(divTodos);
// console.log(cursosTodos);
// console.log(cursosc1);
// console.log(cursosc2);
// console.log(cursoEspecial);

// cursosc2.map((el, i) => {
//   el.classList.add("destaque");
// });

