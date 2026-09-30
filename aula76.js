const numero = document.getElementById("numero")
const btn = document.getElementById("btn")

btn.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."
    promessa()
    .then((retorno) => {
        numero.innerHTML = retorno
        numero.classList.remove("erro")
        numero.classList.add("ok")
    })
    .catch((retorno) => {
        numero.innerHTML = retorno
        numero.classList.add("erro")
        numero.classList.remove("ok")
    })
})

const promessa = () => {
    let p = new Promise((res, nres) => {
        let resultado = false
        let temp = 3000
        setTimeout(() => {
            if (resultado) {
                res("Deu tudo certo")
            } else {
                nres("Deu tudo errado")
            }
        }, temp)
    })
    return p

}
// if (resultado) {
//     numero.innerHTML = "Deu tudo certo"
//     numero.classList.remove("erro")
//     numero.classList.add("ok")
// } else {
//     numero.innerHTML = "Deu tudo errado"
//     numero.classList.add("erro")
//     numero.classList.remove("ok")
// }

numero.innerHTML = "Esperando..."