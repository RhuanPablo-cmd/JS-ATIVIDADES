const caixa1 = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".cursos")]

console.log(document.getRootNode(caixa1))

console.log(caixa1.children)
// Todos items
console.log(caixa1.lastElementChild)
// Ultimo item
console.log(caixa1.firstElementChild)
// Primeiro item