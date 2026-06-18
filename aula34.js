// function msg(){
//     alert("clicou")
// }
const cursos = [...document.querySelectorAll(".curso")];

// const msg = () => {
//   alert("Clicou");
// };

cursos.map((el) => {
  el.addEventListener("click", (evt) => {
    const el = evt.target;
    el.classList.add("destaque");
    console.log(el.innerHTML + " foi clicado ")
  });
});

// const c1 = document.getElementById("c1");
// const c1=document.querySelector("#c1")

// c1.addEventListener("click", (evt) => {});
