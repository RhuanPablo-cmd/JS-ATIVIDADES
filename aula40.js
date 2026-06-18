const caixa1 = document.querySelector("#caixa1")
const cursos = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursosht = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]

cursosht.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    caixa1.appendChild(novoElemento)
})

