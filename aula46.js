const caixaCursos = document.querySelector("#caixaCursos")
const cursosht = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("btnRemoverCurso")
const btnAdicionarAntes = document.getElementById("btnAdicionarAntes")
const btnAdicionarDepois = document.getElementById("btnAdicionarDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tirarSelecao=()=>{
    const cursosSelecionado=[...document.querySelectorAll(".selecionados")]
    cursosSelecionado.map((el)=>{
        el.classList.remove("selecionado")
    })
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso-card")

    const label = document.createElement("span")
    label.textContent = curso
    novoElemento.appendChild(label)

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    novoElemento.addEventListener("click", (evt)=>{
        tirarSelecao()
        evt.target.classList.toggle(".selecionado")
    })

    return novoElemento

}

cursosht.forEach((curso, chave) => {
    const novoElemnto = criarNovoCurso(curso)
    caixaCursos.appendChild(novoElemnto)
    indice++

})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type=radio]")]
    const radioSelecionado = todosRadios.filter((ele) => {
        return ele.checked
    })
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
        alert("Curso selecionado: " + cursoSelecionado)
    } catch (ex) {
        alert("Selecione um curso!!!")
    }

    // if (rs != undefined) {
    //     const cursoSelecionado = rs.parentNode.parentNode.firstChild.textContent
    //     alert("Curso selecionado: " + cursoSelecionado)
    // } else {
    //     alert("Selecione um curso!!!")
    // }
})

btnRemoveCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if (rs != undefined) {
        const cursoSelecionado = rs.parentNode.parentNode
        cursoSelecionado.remove()
    } else {
        alert("Selecione um curso!!!")
    }
})

btnAdicionarAntes.addEventListener("click", (evt) => {
    const rs = radioSelecionado()

    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoElemnto = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoElemnto, cursoSelecionado)
        }
        else {
            alert("Digite o nome do curso!!!")
        }
    } catch (ex) {
        alert("Selecione um curso!!!")
    }

})
btnAdicionarDepois.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    try {
        if (nomeCurso.value != "") {
            const cursoSelecionado = rs.parentNode.parentNode
            const novoElemnto = criarNovoCurso(nomeCurso.value)
            caixaCursos.insertBefore(novoElemnto, cursoSelecionado.nextSibling)
        }else{
            alert("Digit o nome do curso!!!")
        }
    } catch (ex) {
        alert("Selecione um curso!!!")
    }
})
