const caixaCursos = document.querySelector("#caixaCursos")
const cursosht = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado=document.getElementById("btnCursoSelecionado")

cursosht.forEach((curso, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso-card")

    const label = document.createElement("span")
    label.textContent = curso
    novoElemento.appendChild(label)

    const comandos=document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb=document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

btnCursoSelecionado.addEventListener("click", (evt)=>{
    const todosRadios=[...document.querySelectorAll("input[type=radio]")]
    let radioSelecionado=todosRadios.filter((ele)=>{
        return ele.checked
    })
    radioSelecionado=radioSelecionado[0]
    const cursoSelecionado=radioSelecionado.parentNode.parentNode.firstChild.textContent
    alert("Curso selecionado: " + cursoSelecionado)
    // console.log(todosRadios)
    // console.log(cursoSelecionado)
})